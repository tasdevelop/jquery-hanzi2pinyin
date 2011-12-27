/*
 * jQuery hanzi2pinyin v0.1 (simplified Chinese, common characters) - fast hanzi to pinyin convertion
 * Author: Caiguanhao
 * Licensed under the GPL license:
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($){
 	$.fn.extend({ 
 		hanzi2pinyin: function(options) {
			var defaults = {
				target: null,
				hyphen: '-',
				'case': 'lower',
				punctuation_marks: 'remove'
			},
			options = $.extend(defaults, options),
			simp_chinese_chars='啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座',
			punctuation_marks={'。':'.','？':'?','！':'!','、':',','，':',','；':';','：':':','“':'"','”':'"','‘':'\'','’':'\'','（':'(','）':')','【':'[','】':']','［':'[','］':']','〔':'[','〕':']','《':'<','》':'>','〈':'<','〉':'>','·':'.','—':'-','…':'...','－':'-','·':'.','×':'*','＊':'*','＃':'#','～':'~','﹏':'_'},
			punctuation_marks_pattern=/[。？！、，；：“”‘’（）【】［］〔〕《》〈〉·—…－×＊＃～﹏]/g,
			val_elements=['input','textarea','select'],
			h2p_convertion=function(){
				var s=($.type(this)==='object')?($.inArray($(this)[0].nodeName.toLowerCase(),val_elements)>-1?$(this).val():$(this).html()):this,
				o=function(){
					if(s.match(/[\u4e00-\u9fa5]/g)){
						s=s.replace(/[\u4e00-\u9fa5]/g,function(w){
							return function(n){
								switch(options['case']){
									case 'proper':
									case 'title':
										return n.substr(0,1).toUpperCase()+n.substr(1);
									case 'upper':
										return n.toUpperCase();
									default:
										return n;
								}
							}(function(n){
								switch(true){
									case(0<=n&&n<2):return'a';case(2<=n&&n<15):return'ai';case(15<=n&&n<24):return'an';case(24<=n&&n<27):return'ang';case(27<=n&&n<36):return'ao';case(36<=n&&n<54):return'ba';case(54<=n&&n<62):return'bai';case(62<=n&&n<77):return'ban';case(77<=n&&n<89):return'bang';case(89<=n&&n<106):return'bao';case(106<=n&&n<121):return'bei';case(121<=n&&n<125):return'ben';case(125<=n&&n<131):return'beng';case(131<=n&&n<155):return'bi';case(155<=n&&n<167):return'bian';case(167<=n&&n<171):return'biao';case(171<=n&&n<175):return'bie';case(175<=n&&n<181):return'bin';case(181<=n&&n<190):return'bing';case(190<=n&&n<211):return'bo';case(211<=n&&n<220):return'bu';case(220<=n&&n<221):return'ca';case(221<=n&&n<232):return'cai';case(232<=n&&n<239):return'can';case(239<=n&&n<244):return'cang';case(244<=n&&n<249):return'cao';case(249<=n&&n<254):return'ce';case(254<=n&&n<256):return'ceng';case(256<=n&&n<267):return'cha';case(267<=n&&n<270):return'chai';case(270<=n&&n<280):return'chan';case(280<=n&&n<293):return'chang';case(293<=n&&n<302):return'chao';case(302<=n&&n<308):return'che';case(308<=n&&n<318):return'chen';case(318<=n&&n<333):return'cheng';case(333<=n&&n<349):return'chi';case(349<=n&&n<354):return'chong';case(354<=n&&n<366):return'chou';case(366<=n&&n<382):return'chu';case(382<=n&&n<383):return'chuai';case(383<=n&&n<390):return'chuan';case(390<=n&&n<396):return'chuang';case(396<=n&&n<401):return'chui';case(401<=n&&n<408):return'chun';case(408<=n&&n<410):return'chuo';case(410<=n&&n<422):return'ci';case(422<=n&&n<428):return'cong';case(428<=n&&n<429):return'cou';case(429<=n&&n<433):return'cu';case(433<=n&&n<436):return'cuan';case(436<=n&&n<444):return'cui';case(444<=n&&n<447):return'cun';case(447<=n&&n<453):return'cuo';case(453<=n&&n<459):return'da';case(459<=n&&n<471):return'dai';case(471<=n&&n<486):return'dan';case(486<=n&&n<491):return'dang';case(491<=n&&n<503):return'dao';case(503<=n&&n<506):return'de';case(506<=n&&n<513):return'deng';case(513<=n&&n<532):return'di';case(532<=n&&n<548):return'dian';case(548<=n&&n<557):return'diao';case(557<=n&&n<564):return'die';case(564<=n&&n<573):return'ding';case(573<=n&&n<574):return'diu';case(574<=n&&n<584):return'dong';case(584<=n&&n<591):return'dou';case(591<=n&&n<606):return'du';case(606<=n&&n<612):return'duan';case(612<=n&&n<616):return'dui';case(616<=n&&n<625):return'dun';case(625<=n&&n<637):return'duo';case(637<=n&&n<650):return'e';case(650<=n&&n<651):return'en';case(651<=n&&n<659):return'er';case(659<=n&&n<667):return'fa';case(667<=n&&n<684):return'fan';case(684<=n&&n<695):return'fang';case(695<=n&&n<707):return'fei';case(707<=n&&n<722):return'fen';case(722<=n&&n<737):return'feng';case(737<=n&&n<738):return'fo';case(738<=n&&n<739):return'fou';case(739<=n&&n<784):return'fu';case(784<=n&&n<786):return'ga';case(786<=n&&n<792):return'gai';case(792<=n&&n<803):return'gan';case(803<=n&&n<812):return'gang';case(812<=n&&n<822):return'gao';case(822<=n&&n<839):return'ge';case(839<=n&&n<840):return'gei';case(840<=n&&n<842):return'gen';case(842<=n&&n<849):return'geng';case(849<=n&&n<864):return'gong';case(864<=n&&n<873):return'gou';case(873<=n&&n<891):return'gu';case(891<=n&&n<897):return'gua';case(897<=n&&n<900):return'guai';case(900<=n&&n<911):return'guan';case(911<=n&&n<914):return'guang';case(914<=n&&n<930):return'gui';case(930<=n&&n<933):return'gun';case(933<=n&&n<939):return'guo';case(939<=n&&n<940):return'ha';case(940<=n&&n<947):return'hai';case(947<=n&&n<966):return'han';case(966<=n&&n<969):return'hang';case(969<=n&&n<978):return'hao';case(978<=n&&n<996):return'he';case(996<=n&&n<998):return'hei';case(998<=n&&n<1002):return'hen';case(1002<=n&&n<1007):return'heng';case(1007<=n&&n<1016):return'hong';case(1016<=n&&n<1023):return'hou';case(1023<=n&&n<1041):return'hu';case(1041<=n&&n<1050):return'hua';case(1050<=n&&n<1055):return'huai';case(1055<=n&&n<1069):return'huan';case(1069<=n&&n<1083):return'huang';case(1083<=n&&n<1104):return'hui';case(1104<=n&&n<1110):return'hun';case(1110<=n&&n<1120):return'huo';case(1120<=n&&n<1173):return'ji';case(1173<=n&&n<1190):return'jia';case(1190<=n&&n<1230):return'jian';case(1230<=n&&n<1243):return'jiang';case(1243<=n&&n<1271):return'jiao';case(1271<=n&&n<1298):return'jie';case(1298<=n&&n<1318):return'jin';case(1318<=n&&n<1343):return'jing';case(1343<=n&&n<1345):return'jiong';case(1345<=n&&n<1362):return'jiu';case(1362<=n&&n<1387):return'ju';case(1387<=n&&n<1394):return'juan';case(1394<=n&&n<1404):return'jue';case(1404<=n&&n<1415):return'jun';case(1415<=n&&n<1419):return'ka';case(1419<=n&&n<1424):return'kai';case(1424<=n&&n<1430):return'kan';case(1430<=n&&n<1437):return'kang';case(1437<=n&&n<1441):return'kao';case(1441<=n&&n<1456):return'ke';case(1456<=n&&n<1460):return'ken';case(1460<=n&&n<1462):return'keng';case(1462<=n&&n<1466):return'kong';case(1466<=n&&n<1470):return'kou';case(1470<=n&&n<1477):return'ku';case(1477<=n&&n<1482):return'kua';case(1482<=n&&n<1486):return'kuai';case(1486<=n&&n<1488):return'kuan';case(1488<=n&&n<1496):return'kuang';case(1496<=n&&n<1507):return'kui';case(1507<=n&&n<1511):return'kun';case(1511<=n&&n<1515):return'kuo';case(1515<=n&&n<1522):return'la';case(1522<=n&&n<1525):return'lai';case(1525<=n&&n<1540):return'lan';case(1540<=n&&n<1547):return'lang';case(1547<=n&&n<1556):return'lao';case(1556<=n&&n<1558):return'le';case(1558<=n&&n<1569):return'lei';case(1569<=n&&n<1572):return'leng';case(1572<=n&&n<1606):return'li';case(1606<=n&&n<1607):return'lia';case(1607<=n&&n<1621):return'lian';case(1621<=n&&n<1632):return'liang';case(1632<=n&&n<1645):return'liao';case(1645<=n&&n<1650):return'lie';case(1650<=n&&n<1662):return'lin';case(1662<=n&&n<1676):return'ling';case(1676<=n&&n<1687):return'liu';case(1687<=n&&n<1696):return'long';case(1696<=n&&n<1702):return'lou';case(1702<=n&&n<1722):return'lu';case(1722<=n&&n<1736):return'lv';case(1736<=n&&n<1742):return'luan';case(1742<=n&&n<1744):return'lue';case(1744<=n&&n<1751):return'lun';case(1751<=n&&n<1763):return'luo';case(1763<=n&&n<1772):return'ma';case(1772<=n&&n<1778):return'mai';case(1778<=n&&n<1787):return'man';case(1787<=n&&n<1793):return'mang';case(1793<=n&&n<1805):return'mao';case(1805<=n&&n<1806):return'me';case(1806<=n&&n<1822):return'mei';case(1822<=n&&n<1825):return'men';case(1825<=n&&n<1833):return'meng';case(1833<=n&&n<1847):return'mi';case(1847<=n&&n<1856):return'mian';case(1856<=n&&n<1864):return'miao';case(1864<=n&&n<1866):return'mie';case(1866<=n&&n<1872):return'min';case(1872<=n&&n<1878):return'ming';case(1878<=n&&n<1879):return'miu';case(1879<=n&&n<1896):return'mo';case(1896<=n&&n<1899):return'mou';case(1899<=n&&n<1914):return'mu';case(1914<=n&&n<1921):return'na';case(1921<=n&&n<1926):return'nai';case(1926<=n&&n<1929):return'nan';case(1929<=n&&n<1930):return'nang';case(1930<=n&&n<1935):return'nao';case(1935<=n&&n<1936):return'ne';case(1936<=n&&n<1938):return'nei';case(1938<=n&&n<1939):return'nen';case(1939<=n&&n<1940):return'neng';case(1940<=n&&n<1951):return'ni';case(1951<=n&&n<1958):return'nian';case(1958<=n&&n<1960):return'niang';case(1960<=n&&n<1962):return'niao';case(1962<=n&&n<1969):return'nie';case(1969<=n&&n<1970):return'nin';case(1970<=n&&n<1976):return'ning';case(1976<=n&&n<1980):return'niu';case(1980<=n&&n<1984):return'nong';case(1984<=n&&n<1987):return'nu';case(1987<=n&&n<1988):return'nv';case(1988<=n&&n<1989):return'nuan';case(1989<=n&&n<1991):return'nue';case(1991<=n&&n<1995):return'nuo';case(1995<=n&&n<1996):return'o';case(1996<=n&&n<2003):return'ou';case(2003<=n&&n<2009):return'pa';case(2009<=n&&n<2015):return'pai';case(2015<=n&&n<2023):return'pan';case(2023<=n&&n<2028):return'pang';case(2028<=n&&n<2035):return'pao';case(2035<=n&&n<2044):return'pei';case(2044<=n&&n<2046):return'pen';case(2046<=n&&n<2060):return'peng';case(2060<=n&&n<2077):return'pi';case(2077<=n&&n<2081):return'pian';case(2081<=n&&n<2085):return'piao';case(2085<=n&&n<2087):return'pie';case(2087<=n&&n<2092):return'pin';case(2092<=n&&n<2101):return'ping';case(2101<=n&&n<2110):return'po';case(2110<=n&&n<2125):return'pu';case(2125<=n&&n<2161):return'qi';case(2161<=n&&n<2164):return'qia';case(2164<=n&&n<2186):return'qian';case(2186<=n&&n<2194):return'qiang';case(2194<=n&&n<2209):return'qiao';case(2209<=n&&n<2214):return'qie';case(2214<=n&&n<2225):return'qin';case(2225<=n&&n<2238):return'qing';case(2238<=n&&n<2240):return'qiong';case(2240<=n&&n<2248):return'qiu';case(2248<=n&&n<2261):return'qu';case(2261<=n&&n<2272):return'quan';case(2272<=n&&n<2280):return'que';case(2280<=n&&n<2282):return'qun';case(2282<=n&&n<2286):return'ran';case(2286<=n&&n<2291):return'rang';case(2291<=n&&n<2294):return'rao';case(2294<=n&&n<2296):return're';case(2296<=n&&n<2306):return'ren';case(2306<=n&&n<2308):return'reng';case(2308<=n&&n<2309):return'ri';case(2309<=n&&n<2319):return'rong';case(2319<=n&&n<2322):return'rou';case(2322<=n&&n<2332):return'ru';case(2332<=n&&n<2334):return'ruan';case(2334<=n&&n<2337):return'rui';case(2337<=n&&n<2339):return'run';case(2339<=n&&n<2341):return'ruo';case(2341<=n&&n<2344):return'sa';case(2344<=n&&n<2348):return'sai';case(2348<=n&&n<2352):return'san';case(2352<=n&&n<2355):return'sang';case(2355<=n&&n<2359):return'sao';case(2359<=n&&n<2362):return'se';case(2362<=n&&n<2363):return'sen';case(2363<=n&&n<2364):return'seng';case(2364<=n&&n<2373):return'sha';case(2373<=n&&n<2375):return'shai';case(2375<=n&&n<2391):return'shan';case(2391<=n&&n<2399):return'shang';case(2399<=n&&n<2410):return'shao';case(2410<=n&&n<2422):return'she';case(2422<=n&&n<2438):return'shen';case(2438<=n&&n<2449):return'sheng';case(2449<=n&&n<2496):return'shi';case(2496<=n&&n<2506):return'shou';case(2506<=n&&n<2539):return'shu';case(2539<=n&&n<2541):return'shua';case(2541<=n&&n<2545):return'shuai';case(2545<=n&&n<2547):return'shuan';case(2547<=n&&n<2550):return'shuang';case(2550<=n&&n<2554):return'shui';case(2554<=n&&n<2558):return'shun';case(2558<=n&&n<2562):return'shuo';case(2562<=n&&n<2578):return'si';case(2578<=n&&n<2586):return'song';case(2586<=n&&n<2589):return'sou';case(2589<=n&&n<2602):return'su';case(2602<=n&&n<2605):return'suan';case(2605<=n&&n<2616):return'sui';case(2616<=n&&n<2619):return'sun';case(2619<=n&&n<2627):return'suo';case(2627<=n&&n<2636):return'ta';case(2636<=n&&n<2645):return'tai';case(2645<=n&&n<2663):return'tan';case(2663<=n&&n<2676):return'tang';case(2676<=n&&n<2687):return'tao';case(2687<=n&&n<2688):return'te';case(2688<=n&&n<2692):return'teng';case(2692<=n&&n<2707):return'ti';case(2707<=n&&n<2715):return'tian';case(2715<=n&&n<2720):return'tiao';case(2720<=n&&n<2723):return'tie';case(2723<=n&&n<2733):return'ting';case(2733<=n&&n<2746):return'tong';case(2746<=n&&n<2750):return'tou';case(2750<=n&&n<2761):return'tu';case(2761<=n&&n<2763):return'tuan';case(2763<=n&&n<2769):return'tui';case(2769<=n&&n<2772):return'tun';case(2772<=n&&n<2783):return'tuo';case(2783<=n&&n<2790):return'wa';case(2790<=n&&n<2792):return'wai';case(2792<=n&&n<2809):return'wan';case(2809<=n&&n<2819):return'wang';case(2819<=n&&n<2852):return'wei';case(2852<=n&&n<2862):return'wen';case(2862<=n&&n<2865):return'weng';case(2865<=n&&n<2874):return'wo';case(2874<=n&&n<2903):return'wu';case(2903<=n&&n<2938):return'xi';case(2938<=n&&n<2951):return'xia';case(2951<=n&&n<2977):return'xian';case(2977<=n&&n<2997):return'xiang';case(2997<=n&&n<3015):return'xiao';case(3015<=n&&n<3036):return'xie';case(3036<=n&&n<3046):return'xin';case(3046<=n&&n<3061):return'xing';case(3061<=n&&n<3068):return'xiong';case(3068<=n&&n<3077):return'xiu';case(3077<=n&&n<3096):return'xu';case(3096<=n&&n<3106):return'xuan';case(3106<=n&&n<3112):return'xue';case(3112<=n&&n<3126):return'xun';case(3126<=n&&n<3142):return'ya';case(3142<=n&&n<3175):return'yan';case(3175<=n&&n<3192):return'yang';case(3192<=n&&n<3207):return'yao';case(3207<=n&&n<3222):return'ye';case(3222<=n&&n<3275):return'yi';case(3275<=n&&n<3291):return'yin';case(3291<=n&&n<3309):return'ying';case(3309<=n&&n<3310):return'yo';case(3310<=n&&n<3325):return'yong';case(3325<=n&&n<3346):return'you';case(3346<=n&&n<3390):return'yu';case(3390<=n&&n<3410):return'yuan';case(3410<=n&&n<3420):return'yue';case(3420<=n&&n<3432):return'yun';case(3432<=n&&n<3435):return'za';case(3435<=n&&n<3442):return'zai';case(3442<=n&&n<3446):return'zan';case(3446<=n&&n<3449):return'zang';case(3449<=n&&n<3463):return'zao';case(3463<=n&&n<3467):return'ze';case(3467<=n&&n<3468):return'zei';case(3468<=n&&n<3469):return'zen';case(3469<=n&&n<3473):return'zeng';case(3473<=n&&n<3487):return'zha';case(3487<=n&&n<3493):return'zhai';case(3493<=n&&n<3510):return'zhan';case(3510<=n&&n<3525):return'zhang';case(3525<=n&&n<3535):return'zhao';case(3535<=n&&n<3545):return'zhe';case(3545<=n&&n<3561):return'zhen';case(3561<=n&&n<3576):return'zheng';case(3576<=n&&n<3619):return'zhi';case(3619<=n&&n<3630):return'zhong';case(3630<=n&&n<3644):return'zhou';case(3644<=n&&n<3670):return'zhu';case(3670<=n&&n<3672):return'zhua';case(3672<=n&&n<3673):return'zhuai';case(3673<=n&&n<3679):return'zhuan';case(3679<=n&&n<3686):return'zhuang';case(3686<=n&&n<3692):return'zhui';case(3692<=n&&n<3694):return'zhun';case(3694<=n&&n<3705):return'zhuo';case(3705<=n&&n<3720):return'zi';case(3720<=n&&n<3727):return'zong';case(3727<=n&&n<3731):return'zou';case(3731<=n&&n<3739):return'zu';case(3739<=n&&n<3741):return'zuan';case(3741<=n&&n<3745):return'zui';case(3745<=n&&n<3747):return'zun';case(3747<=n):return'zuo';default:return'';
								}
							}(simp_chinese_chars.indexOf(w)))+options.hyphen;
						});
					}
					return function(n){
						if(n.slice(-options.hyphen.length)==options.hyphen)n=n.slice(0,-options.hyphen.length);
						return n;
					}(function(n){
						switch(options.punctuation_marks){
							case 'replace':
								return n.replace(punctuation_marks_pattern,function(m){return punctuation_marks[m]||m;});
							case 'remove':
								return n.replace(punctuation_marks_pattern,'');
							default:
								return n;
						}
					}(s));
				}();
				switch($.type(this).toLowerCase()){
					case 'object':
						if(!options.target)options.target=this;
						if($.inArray($(options.target)[0].nodeName.toLowerCase(),val_elements)>-1)
							$(options.target).val(o);
						else
							$(options.target).html(o);
					default:
						return o;
				}
    		};
			switch($.type(this).toLowerCase()){
				case 'object':
					return this.each(function(){h2p_convertion.apply(this)});
				default:
					return h2p_convertion.apply(this);
			}
			
    	}
	});
})(jQuery);
String.prototype.hanzi2pinyin = function(options){return $.fn.hanzi2pinyin.apply(this,[options]);};