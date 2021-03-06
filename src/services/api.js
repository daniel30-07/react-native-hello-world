import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api

// IOS com emulador: localhost
// IOS com físico: IP da máquina
// Android com emulador: local host (adb reverse tcp:3333 tcp:3333)
// Android com emulador: 10.0.2.2 (android studio)
// Android com físico: IP da máquina