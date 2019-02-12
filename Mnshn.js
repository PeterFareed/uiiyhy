
Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
client.on("message", msg => {
let ownerid = '537824006150291466'/
if(msg.content === `<@${ownerid}>`){
bot.users.get(ownerid).send(`
في واحد منشنك

In server: :arrow_down:
\`${msg.guild.name}\`
 
By: :arrow_down:
***${msg.author}***`);
}
})