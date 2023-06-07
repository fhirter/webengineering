#!/bin/bash

# usage: ./validate_html.sh <folder path>

validate_html_files() {
    folder_path=$1
    html_files=$(find "$folder_path" -type f -name "*.html" -print)
    css_files=$(find "$folder_path" -type f -name "*.css" -print)

    for file in $html_files; do
        html_validation_output=$(curl -s -F "uploaded_file=@$file" https://validator.w3.org/nu/?out=json)

        if echo "$html_validation_output" | grep -q "The document validates"; then
            echo "$file is valid"
        else
            echo "$file is invalid"
        fi
        sleep 2
    done

    for file in $css_files; do

        css_validation_output=$(curl -s -F "file=@$file" -F "output=json" https://validator.w3.org/nu/?parser=css)

        if echo "$css_validation_output" | grep -q "The document validates"; then
            echo "$file is valid"
        else
            echo "$file is invalid"
        fi
        sleep 2
    done
}

validate_html_files "$1"
