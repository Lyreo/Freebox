module.exports = function install(){
var myDevice = {
    device: {
        name: 'Freebox decoder',
        identifier: 'hd1',
        protocol: 'freebox',
        service: 'freebox'
    },
    types: [
        {
            identifier: "power",
            type: 'binary',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "channel",
            type:'channel',
            unit: 'channel',
            min: 0,
            max: 999,
            sensor: false
        },
        {
            identifier: "ok",
            type: 'ok',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "volup",
            type: 'volup',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "voldown",
            type: 'voldown',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        }
    ]   
};
gladys.device.create(myDevice)
      .then(function(device){
          console.log("Attention, pensez à préciser dans les devices dans quelle pièce se situe votre décoder et éventuellement de remplacer hd1 par hd2 si il s'agit d'un décodeur secondaire.")
         // device created ! 
      })
      .catch(function(err){
          // something bad happened ! :/
                    console.log(err)

      });
}