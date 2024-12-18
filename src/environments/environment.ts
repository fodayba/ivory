export const environment = {
  production: false,
  emailJs: {
    publicKey: process.env['publicKey'] || '',
    serviceId: process.env['serviceId'] || '',
    templateId: process.env['templateId'] || '',
    toEmail: process.env['toEmail'] || ''
  }
}; 