import { Repo } from "@automerge/automerge-repo";
import { WebSocketServer } from "ws";
import { NodeWSServerAdapter } from "@automerge/automerge-repo-network-websocket";
import { NodeFSStorageAdapter } from "@automerge/automerge-repo-storage-nodefs";

const wss = new WebSocketServer({ noServer: true });
const dir = ".";

const repo = new Repo({
    network: [new NodeWSServerAdapter(wss)],
    storage: new NodeFSStorageAdapter(dir),
});

let doc = repo.create();
// Make a change ourselves and send that to everyone else
doc.change((d) => (d.text = "hello world"));
// Listen for changes from other peers
doc.on("change", ({ doc }) => {
    console.log("new text is ", doc.text);
});