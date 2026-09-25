// フカシPK：ホーム画面に置くための最小のサービスワーカー（キャッシュはしない＝いつも最新版を読む）
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
