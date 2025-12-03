module.exports.config = {
 name: "ss",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "Shahadat Islam",
 description: "Group এ সবাইকে নির্দিষ্ট সংখ্যায় মেনশন পাঠানো",
 commandCategory: "group",
 usages: "/ss [everyone]",
 cooldowns: 2
};

module.exports.run = async ({ api, event, args }) => {
 const threadID = event.threadID;
 const threadInfo = await api.getThreadInfo(threadID);
 const memberIDs = threadInfo.participantIDs;

 const repeatCount = parseInt(args[0]) || 1;

 const mentions = memberIDs
 .filter(id => id != api.getCurrentUserID())
 .map(id => ({ tag: "@everyone", id }));

 for (let i = 0; i < repeatCount; i++) {
 await api.sendMessage({
 body: `📢 @everyone\nআমাদের𝐒𝐒 𝐓𝐢𝐦𝐞 রাত 𝟗 𝐭𝐚 𝐓𝐡𝐞𝐤𝐞 10 𝐭𝐚 𝐩𝐫𝐨𝐣𝐨𝐧𝐭𝐨📍𝐒𝐒 𝐭𝐢𝐦𝐞 𝐡𝐚𝐫𝐝 𝐫𝐮𝐥𝐬𝐞📍

রুলস সবার জন্য সমান, Members, Ceo, creator  যেই হোক, যদি কলে 2দিন অনুপস্থিত থাকে রিমুভ করে দিবো,
🙌𝐒𝐒 𝐓𝐢𝐦𝐞 𝐁𝐃 𝟗-𝟏𝟎🙌 এই  ঘন্টা সবাই কে থাকতে হবে বাধ্যতামূলক না থাকলে কিক👿🤬🐸`,
 mentions
 }, threadID);

 await new Promise(resolve => setTimeout(resolve, 2000)); 
 }
};
