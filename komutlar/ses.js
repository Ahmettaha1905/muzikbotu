module.exports = {
  name:"ses",
  code:`$volume[$message]
$description[Ses **$message** Olarak Ayarlandı]
 $onlyIf[$message[1]<=100;Sesi 100 ün Üstüne Çıkamaz] 
`
}