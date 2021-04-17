module.exports = ({
    name: "durdur",
  aliases:['stop'],
    code: `
    $color[e20038]
$author[Şarkı Başarıyla Durduruldu]
$pauseSong

$onlyIf[$voiceID!=;{description::x: | **Bir Ses Kanalına Giriş Sağlamalısın**}{color:ff3030}]

$suppressErrors[Bir Hata Oluştu]
    `
    });