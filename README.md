#### GCM Workflow

1. 註冊 Google API Key 會有 Sender_ID + API_KEY
2. APP 端(Android, iOS, Chrome) 使用 Sender_ID 去換 RegistratinID 回來。傳給 Backend Server。
3. Backend Server 使用 API_Key + RegistrationID 調用 Google GCM HTTP API 發送 Notifaction。
4. 要用新版的寫法來實作 Chrome App Extension 才會支援 GCN，

#### GCM Client

1. 可以用 Registration 來收簡訊或用 Subscribe Topic 來收簡訊。
