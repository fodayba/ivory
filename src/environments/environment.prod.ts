export const environment = {
  production: true,
  emailJs: {
    publicKey: process.env['publicKey'] || '',
    serviceId: process.env['serviceId'] || '',
    templateId: process.env['templateId'] || '',
    toEmail: process.env['toEmail'] || ''
  }
}; 