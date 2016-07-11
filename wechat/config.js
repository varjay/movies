'use strict'

var path = require('path')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt')
var wechat_ticket_file = path.join(__dirname, './config/wechat_ticket.txt')
var config = {
	wechat:{
		appID: 'wxc810a09b57f5bea5',
		appSecret: 'eeb5abff6f414822a233fe354965cb01',
		token: 'virjayvarjayrorschachbatmangafde',

		//穆尼
		// appID: 'wx77943714ad0bd998',
		// appSecret: 'eaa280bbca13a7751a559f3457f2b16a',
		// token: 'virjayvarjayrorschachbatmangafde',

		// appID: 'wxe9e2ec8d631c277d',
		// appSecret: 'ebacae6574a8aa091684c937edf6f48d',
		// token: 'imoocisareallyamzingplacetolearn',
		getAccessToken: function(){
			return util.readFileAsync(wechat_file)
		},
		saveAccessToken: function(data){
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_file, data)
		},
		getTicket: function(){
			return util.readFileAsync(wechat_ticket_file)
		},
		saveTicket: function(data){
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_ticket_file, data)
		}
	}
}

module.exports = config
