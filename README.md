# ww_drawtext
Standalone DrawText UI for FiveM

Preview:
![image](https://user-images.githubusercontent.com/90979509/163391338-8e01ff6d-fe48-484b-bd73-1d805a9906df.png)

Examples:

Clientside:
 exports["ww_helptext"]:showHelp('<kbd>E</kbd> Use item')
 TriggerEvent('help:show', '<kbd>E</kbd> Use item')
 
 exports["ww_helptext"]:hideHelp()
 TriggerEvent('help:hide')
 
Serverside:
  TriggerClientEvent('help:show', source, '<kbd>E</kbd> Use item')
  TriggerClientEvent('help:hide', source)
 
 
