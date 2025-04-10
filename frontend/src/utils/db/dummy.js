export const POSTS = [
	{
		_id: "1",
		text: "You are a woman and I am a man and we belong in the dark together.",
		img: "/posts/post1.png",
		user: {
			username: "joegoldberg",
			profileImg: "/avatars/boy1.png",
			fullName: "Joe Goldberg",
		},
		comments: [
			{
				_id: "1",
				text: "nice post",
				user: {
					username: "zendaya",
					profileImg: "/avatars/girl1.png",
					fullName: "Zendaya Coleman",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "Dünyada görmek istediğin değişimin bir parçası ol.",
		user: {
			username: "msikkofield",
			profileImg: "/avatars/boy2.png",
			fullName: "Cemre Demirel",
		},
		comments: [
			{
				_id: "1",
				text: "heyyy!",
				user: {
					username: "icespice",
					profileImg: "/avatars/girl2.png",
					fullName: "Ice Spice",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "3",
		text: "Hiçbir yere ait olmayanları iyi tanırım. Her yere aitmiş gibi davranırlar.",
		img: "/posts/post2.png",
		user: {
			username: "hakangunday",
			profileImg: "/avatars/boy3.png",
			fullName: "Hakan Günday",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},
	{
		_id: "4",
		text: "Sorarlarsa, 'Ne iş yaptın bu dünyada?' diye, rahatça verebilirim yanıtını: Yalnız kaldım. Kalabildim! Altı milyar insanın arasında doğdum. Ve hiçbirine çarpmadan geçtim aralarından...",
		img: "/posts/post3.png",
		user: {
			username: "hakangunday",
			profileImg: "/avatars/boy3.png",
			fullName: "Hakan Günday",
		},
		comments: [
			{
				_id: "1",
				text: ":)",
				user: {
					username: "dojacat",
					profileImg: "/avatars/girl3.png",
					fullName: "Doja Cat",
				},
			},
		],
		likes: [
			"6658s891",
			"6658s892",
			"6658s893",
			"6658s894",
			"6658s895",
			"6658s896",
			"6658s897",
			"6658s898",
			"6658s899",
		],
	},
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "Cemre Demirel",
		username: "msikkofield",
		profileImg: "/avatars/boy2.png",
	},
	{
		_id: "2",
		fullName: "Zendaya Coleman",
		username: "zendaya",
		profileImg: "/avatars/girl1.png",
	},
	{
		_id: "3",
		fullName: "Hakan Günday",
		username: "hakangunday",
		profileImg: "/avatars/boy3.png",
	},
	{
		_id: "4",
		fullName: "Ice Spice",
		username: "icespice",
		profileImg: "/avatars/girl2.png",
	},
];