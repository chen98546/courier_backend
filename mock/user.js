const { config } = require("@vue/test-utils")

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },
  {
    url: "/menu/api/resource",
    type: "get",
    response: config => {
      return {
        code: 20000,
        data: {
          data:
            // JSON.parse(`{"code":0,"msg":"success","count":34,"data":[{"createdTime":"2022-07-09 13:10:35","createdBy":"superadmin","updatedTime":"2022-07-09 13:10:35","updatedBy":"superadmin","id":5469,"name":"库位/货架1","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:33:20","createdBy":"md","updatedTime":"2022-07-11 09:33:20","updatedBy":"md","id":5479,"name":"库位/货架1","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:34:31","createdBy":"md","updatedTime":"2022-07-11 09:34:31","updatedBy":"md","id":5482,"name":"库位/货架1","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5485,"name":"库位/货架1","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-09 13:10:35","createdBy":"superadmin","updatedTime":"2022-07-09 13:10:35","updatedBy":"superadmin","id":5478,"name":"库位/货架10","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5494,"name":"库位/货架10","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5495,"name":"库位/货架11","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5496,"name":"库位/货架12","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5497,"name":"库位/货架13","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5498,"name":"库位/货架14","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5499,"name":"库位/货架15","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5500,"name":"库位/货架16","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5501,"name":"库位/货架17","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5502,"name":"库位/货架18","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5503,"name":"库位/货架19","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-09 13:10:35","createdBy":"superadmin","updatedTime":"2022-07-09 13:10:35","updatedBy":"superadmin","id":5470,"name":"库位/货架2","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:33:20","createdBy":"md","updatedTime":"2022-07-11 09:33:20","updatedBy":"md","id":5480,"name":"库位/货架2","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:34:31","createdBy":"md","updatedTime":"2022-07-11 09:34:31","updatedBy":"md","id":5483,"name":"库位/货架2","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:35:06","createdBy":"md","updatedTime":"2022-07-11 09:35:06","updatedBy":"md","id":5486,"name":"库位/货架2","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null},{"createdTime":"2022-07-11 09:33:20","createdBy":"md","updatedTime":"2022-07-11 09:33:20","updatedBy":"md","id":5481,"name":"库位/货架3","type":0,"use":0,"useOrderId":null,"isDel":0,"orderNo":null,"shelfer":null}],"expand":{}}`) ,     menuVo: {
            JSON.parse(`
            {
              "code": 0,
              "msg": "success",
              "count": 31,
              "data": [
                  {
                      "id": 40051,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MZ",
                      "nickName": "张紫麒",
                      "openid": "o01r05IODOG_kZgNTbQ3mJhvkhmQ",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/QgL2Picu3KsztEK5egdClOHe01EyricZkUP9yuSdib7kIIAfM9jSNJQKia9sBMSct1JuCSp2YanD1Fmj9go5PXVicyQ/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 2,
                      "noUsedCouponCount": 2,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 10:13:40",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 19:44:43",
                      "internal": 0,
                      "createdTime": "2022-07-10 19:44:43",
                      "updatedTime": "2022-07-11 10:13:40"
                  },
                  {
                      "id": 40050,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MY",
                      "nickName": "小朋友",
                      "openid": "o01r05DzMPv44BxRKwiKkrgJOiuk",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/A2fuLtT3dhXfUaff7eicEfG0WULJNGMwDrb55KcBCyhtIAXd7yVouY6Qc6qXk6Gw3248HLTbibJX3lzQS6fplkmg/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 09:04:37",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:27:03",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:27:03",
                      "updatedTime": "2022-07-11 09:04:37"
                  },
                  {
                      "id": 40049,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MX",
                      "nickName": "Mango",
                      "openid": "o01r05APE_1ZQ3Q00paARb3FEqDk",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/6N1u2S94EGUSWZPGToNKbKlX4Eocz1Pt9nqukNq5HBfMP3jXtSJceqDePIvAgOQFZ0d8yvBjFExcN1u3t8uASA/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 09:07:31",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:26:35",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:26:35",
                      "updatedTime": "2022-07-11 09:07:31"
                  },
                  {
                      "id": 40048,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MW",
                      "nickName": "\ufffc",
                      "openid": "o01r05EGVzRDSU5TVPUAplWH45W4",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5Wh2AdV0pALXWDmwHaCiaibicfTHJeE2F94JT2hCbnAxU77sdiccVfzR4vP3zC7iaZ8VV0QBJvkct4kA/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 18:59:51",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:20:26",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:20:26",
                      "updatedTime": "2022-07-10 18:59:51"
                  },
                  {
                      "id": 40047,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MV",
                      "nickName": "想喝酸奶鸭.",
                      "openid": "o01r05BBTvnjKyxra_O-xjGhuess",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLc60C0icHn1ibibHjiaYjGZBzAqrKvVxj3ZlPiaicwlykveaCb4gTUQbbSvpoSkZNdGILicPIzstPJia24Q/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 09:05:15",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:10:25",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:10:25",
                      "updatedTime": "2022-07-11 09:05:15"
                  },
                  {
                      "id": 40046,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MU",
                      "nickName": "https://thirdwx.qlogo.cn/mmopen/vi_32/sBlxQJd2SyUXRe96nR4bQy9YhJKjgCBcmsbPNxSvcvAB7pvz99icibm7WOcRZk8G4x1pfRaBbHwiafqDG4HllVwxg/132",
                      "openid": "o01r05JWy2hzor_fo3SYTFDaALY4",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "·小羊·",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 08:46:58",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:09:45",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:09:45",
                      "updatedTime": "2022-07-11 08:46:58"
                  },
                  {
                      "id": 40045,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MT",
                      "nickName": "肖洛倾",
                      "openid": "o01r05DIzh-Yk9rxtr7imj1U7LF0",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdNxcbUiaZg2ATMLd4MDtQw4kAqObQqSSibX7Z7XWIdHznKx9DISCHTNd5rDLtNvNONO44Om3Wh6Ew/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 17:34:11",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:05:54",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:05:54",
                      "updatedTime": "2022-07-10 17:34:11"
                  },
                  {
                      "id": 40044,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MS",
                      "nickName": "微信用户",
                      "openid": "o01r05HamX13W2xHHAXPn8yht968",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 08:45:59",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:02:08",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:02:08",
                      "updatedTime": "2022-07-11 08:45:59"
                  },
                  {
                      "id": 40043,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MR",
                      "nickName": "\ufffc",
                      "openid": "o01r05K6_awSiPvC-CQ7YWNFgSv0",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/U1Y5Vd9Jn1rj62rFHU21JTNydpAtYUibyuRxrnY9p3FFKEFfkIO2OAzAY9rlwNOdxvhFEHtAwsN9huC1NgA8bzQ/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 08:43:29",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 17:01:44",
                      "internal": 0,
                      "createdTime": "2022-07-10 17:01:44",
                      "updatedTime": "2022-07-11 08:43:29"
                  },
                  {
                      "id": 40042,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MQ",
                      "nickName": "飯炒蛋",
                      "openid": "o01r05Ln_bVushN_6rVCh1jkDe70",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/ZcBAvrbBmC4jazIPbnLIp6icicnQSiavJY85WzgPwv1lOeZgNo595JkPGYYDsNVAZIAeNK6DAsmBIUziaIGOxkKImg/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 19:46:46",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:57:13",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:57:13",
                      "updatedTime": "2022-07-10 19:46:46"
                  },
                  {
                      "id": 40041,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MP",
                      "nickName": "h",
                      "openid": "o01r05KyYOqWwTeEnl5zAolKkk70",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eptlAcwclIdmGIxzRcxqwHn9iaJ5uDTasGDQgMWR6U9TyicEGCQ4qf0Du0wKnPJvura5OZtQ8eVuACA/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 08:47:28",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:56:41",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:56:41",
                      "updatedTime": "2022-07-11 08:47:28"
                  },
                  {
                      "id": 40040,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MN",
                      "nickName": "Z",
                      "openid": "o01r05Kqdwm51GjdJ7y95L0M3TN4",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/BXOUPmar1wSbKiatkU2nB8b56XOg0s8wKN7nblVPSib2tPlicQBBdial4hKCzwI3aUoCTy8LAicEtXhbwbGhic3AxYQw/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 17:28:06",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:53:57",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:53:57",
                      "updatedTime": "2022-07-10 17:28:06"
                  },
                  {
                      "id": 40039,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MM",
                      "nickName": "XXXTentacion_",
                      "openid": "o01r05GNaZmEDh58V8H4PGiYXpvE",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkOEq8MufE6Lsqect4RhbHhibyaemibIUENde3X4xdXtNwRSRGc7mBY7XHdE6wdoIMfwjWaBu8PicQA/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 08:51:24",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:49:56",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:49:56",
                      "updatedTime": "2022-07-11 08:51:24"
                  },
                  {
                      "id": 40038,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010ML",
                      "nickName": "年轻人i",
                      "openid": "o01r05Guv9ETdOkW5UcHT_qo0dBA",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/PbNvZx7R9cUric2YzfkzbPsoNbUDIhrZcMJjS3CwsJ5ibN82bPTApic1C5ZmzbjZgic2PhPibgHibSDicvb0yXK46PF9w/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 09:01:32",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:48:44",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:48:44",
                      "updatedTime": "2022-07-11 09:01:32"
                  },
                  {
                      "id": 40037,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MK",
                      "nickName": "蒋雪峰",
                      "openid": "o01r05K3kkkT8n7vZCoyf4-snn74",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELf5yhvxKo91qV0JicjGkpECEdnjQM49licBlnr4tqyliasapFzYhFtmjC4T2yfb7tNiaDhC6KAD4IzBw/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 19:52:31",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:42:35",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:42:35",
                      "updatedTime": "2022-07-10 19:52:31"
                  },
                  {
                      "id": 40036,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MJ",
                      "nickName": "Wan An",
                      "openid": "o01r05GMrJjwqFZ-YlEFn3UKM8zs",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/MicF1Sut8xXicSP1x2sdo2KWKvwp1pjL7ucqwRWiayacwth4wKVzeiaZoaZicnCCpZQR1bLKjtHy5hiaXjznpt0Oe0Mg/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 18:27:56",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:37:30",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:37:30",
                      "updatedTime": "2022-07-10 18:27:56"
                  },
                  {
                      "id": 40035,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MH",
                      "nickName": "老仙女",
                      "openid": "o01r05AynHip_oN_D83eREVn_MMI",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/GTEnaA9PicicibY1yFvagGMz0vfdGrOwXtCtqrhcV3uR9YyiaUJMzHNtWrOOqeuCmx2ywuicq8YXTViarX3GW4fiaH32Q/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 19:43:45",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:35:55",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:35:55",
                      "updatedTime": "2022-07-10 19:43:45"
                  },
                  {
                      "id": 40034,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MG",
                      "nickName": "阿玮来欧",
                      "openid": "o01r05NoV0KpbzEGUQtnDwvMjmPc",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/43NXK40RLub9Fodvia02YOpzzrsCBOiaz3HrKH2ZNN73TSqBMeof6Q3S2wDubcXhKXg8KyibSm61icrqaZvQwDwpTA/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 09:29:14",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:35:38",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:35:38",
                      "updatedTime": "2022-07-11 09:29:14"
                  },
                  {
                      "id": 40033,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010MF",
                      "nickName": "星月",
                      "openid": "o01r05EwvlzBVl22_sK-GR68pUPQ",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/PENveIyY1oKCe3XXyvvmU26JEMO1sFftRmEROFC9dpeD1LCia7JUs8IoOEU31HVRxtJ7wfn75P3yicF1t6Dcw5ibg/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.19.243",
                      "loginDate": "2022-07-11 10:21:14",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:35:31",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:35:31",
                      "updatedTime": "2022-07-11 10:21:14"
                  },
                  {
                      "id": 40032,
                      "parentId": null,
                      "parentCode": null,
                      "parentNickName": null,
                      "memberNo": "010ME",
                      "nickName": "我吃小朋友",
                      "openid": "o01r05CsrhmNZCVd4Z-UXy-fYlls",
                      "unionid": null,
                      "wxOpenid": null,
                      "wxSubscription": -1,
                      "wxSubscriptionTime": null,
                      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/RRicLOmVON3Z0UZz24okZibn8G7XLfGuwZEWmtuYribnSINDa4Sv1PuEsCGa7CRW0yKhANZGUtzNQFbIvJscg2S4A/132",
                      "name": null,
                      "mobile": null,
                      "province": null,
                      "city": null,
                      "country": null,
                      "gender": null,
                      "receivedCouponCount": 0,
                      "noUsedCouponCount": 0,
                      "expiredCouponCount": 0,
                      "usedCouponCount": 0,
                      "loginIp": "163.125.64.201",
                      "loginDate": "2022-07-10 17:07:41",
                      "registerIp": "163.125.64.201",
                      "registerDate": "2022-07-10 16:33:50",
                      "internal": 0,
                      "createdTime": "2022-07-10 16:33:50",
                      "updatedTime": "2022-07-10 17:07:41"
                  }
              ],
              "expand": {}
          }
            `)
            ,
            children: [],
            icon: null,
            name: "menu",
            path: "/",
            title: "菜单管理"
          },
          usersinfo: {
            userName: "md"
          }
        }
      }
    }

  ,
  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
