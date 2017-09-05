# Gladys Freebox

Gladys hooks to control Freebox decoder.

Need Gladys version >= 3.0.0.

## Documentation

To install this module : 

Install the Freebox module
Add the Parameter "Freebox_net_remote" which will contain the network remote code.
You can find it on your Freebox Player, Tab "Réglages", "Système" then "Informations Freebox Player et Server". This code will contain 8 numbers with the name "Code télécommande réseau".
Restart Gladys
Change the room of the device created
Then to be sure that it worked, go to "Devices", and see if the freebox decoder has been created with identifier "hd1".

optionnal : If your decoder is a secondary decoder, replace hd1 by hd2.


"# Freebox" 
