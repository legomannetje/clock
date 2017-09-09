var clockConfig = {
    host: 'ws://localhost:13900/',
    node: 'default',
    seconds: 150,
    tracks: [{
    	source: 'lossetrack-A +6.mp3',
    	start: 'on start'
    },{
    	source: 'lossetrack-B.mp3',
    	pause: 'on end'
    }]
}