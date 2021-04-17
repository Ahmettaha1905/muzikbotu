module.exports = ({
    name: "geç",
  aliases:['s','skip'],
    code: `
    $color[3ccde0]
$author[Şarkı Atlatıldı]
$skipSong
$description[Müzik Başarıyla Atlatıldı]

$onlyIf[$voiceID!=;{description::x: | **Bir Ses Kanalına Giriş Sağlamalısın**}{color:ff3030}]

$suppressErrors[Bir Hata Oluştu]
    `
    });