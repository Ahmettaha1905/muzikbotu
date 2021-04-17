module.exports = ({
    name: "kapat",
    code: `
    $color[e20038]
$author[Müzik Kapatıldı]
$description[Müzik Başarıyla Kapatıldı]
$stopSong
$onlyIf[$voiceID!=;{description::x: | **Bir Ses Kanalına Giriş Sağlamalısın**}{color:ff3030}]

$suppressErrors[Bir Hata Oluştu]
    `
    });