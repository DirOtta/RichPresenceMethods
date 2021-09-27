var rpc = require("discord-rpc")

var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,

activity : {
details : "",
state : "",

assets : {

large_image : "",
large_text : "",

small_image : "",
small_text : ""

},
buttons : [
{label : "" , url : "LINK"},
{label : "",url : "LINK"}
]
}
})
})

client.login({ clientId : "PUT YOUR APP ID" }).catch(console.error);

// Contact me by Mail : matjonathan53@gmail.com
// Found Me on LAW's Discord Server : https://discord.com/invite/gmtqE4ScJB

