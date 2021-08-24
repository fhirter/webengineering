public_ip=$(ip a | grep "inet 192.168.56" | cut -d "/" -f 1 | cut -c 10-100)
PUBLIC_IP=$public_ip node src/index.js