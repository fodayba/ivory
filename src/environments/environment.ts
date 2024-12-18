declare const process: any; // Declare process for TypeScript

export const environment = {
  production: false,
  emailJs: {
    publicKey: typeof process !== 'undefined' ? process.env['publicKey'] : '',
    serviceId: typeof process !== 'undefined' ? process.env['serviceId'] : '',
    templateId: typeof process !== 'undefined' ? process.env['templateId'] : '',
    toEmail: typeof process !== 'undefined' ? process.env['toEmail'] : ''
  }
}; 