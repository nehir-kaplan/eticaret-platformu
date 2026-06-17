# E-Ticaret Platformu - Altyapı ve Deployment

Bu proje, bir e-ticaret platformunun AWS (EC2/RDS) üzerinde profesyonel standartlarda yayına alınması, süreç yönetimi ve otomasyonunu kapsamaktadır.

## Kullanılan Teknolojiler
- **Cloud:** AWS (EC2 - t3.micro, RDS - PostgreSQL)
- **Runtime:** Node.js
- **Process Manager:** PM2 (Süreç yönetimi ve yüksek erişilebilirlik)
- **Version Control:** Git & GitHub
- **OS:** Amazon Linux 2023

## Proje Özellikleri
- **Ölçeklenebilir Veritabanı:** AWS RDS üzerinde yönetilen PostgreSQL altyapısı.
- **Kesintisiz Çalışma (High Availability):** PM2 aracılığıyla arka plan süreç yönetimi ve otomatik yeniden başlatma (auto-restart) konfigürasyonu.
- **Otomasyon:** Sunucu başlangıcında uygulama servisini otomatik tetikleyen `systemd` entegrasyonu.
- **Güvenlik:** .gitignore stratejisi ile kritik dosyaların (.env, node_modules) versiyon takibi dışında tutulması.

## Kurulum
1. Repoyu klonlayın: `git clone https://github.com/nehir-kaplan/eticaret-platformu.git`
2. Bağımlılıkları yükleyin: `npm install`
3. Sunucu portunu yapılandırın ve PM2 ile başlatın: `pm2 start server.js`