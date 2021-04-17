module.exports = ({
    name: "tekrarla",
  aliases:['loop','repeat'],
    code: `
    $color[e20038]
$author[$replaceText[$replaceText[$loopQueue;true;Şarkı Tekrarlanıyor;-1];false;Şarkı Tekrarlanmıyor;-1];https://cdn.discordapp.com/attachments/778283166418468887/781482437590253598/tekrarla-removebg-preview.png]

$onlyIf[$voiceID!=;{description::x: | **Bir Ses Kanalına Giriş Sağlamalısın**}{color:ff3030}]

$suppressErrors[**Müzik Çalmıyor Nasıl Tekrara Alayım?**]
    `
    });