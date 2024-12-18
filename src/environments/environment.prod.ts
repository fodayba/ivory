declare global {
  interface Window {
    env: {
      publicKey: string;
      serviceId: string;
      templateId: string;
      toEmail: string;
    };
  }
}

export const environment = {
  production: true,
  emailJs: {
    publicKey: typeof window !== 'undefined' ? window.env?.publicKey : process.env['publicKey'] || '',
    serviceId: typeof window !== 'undefined' ? window.env?.serviceId : process.env['serviceId'] || '',
    templateId: typeof window !== 'undefined' ? window.env?.templateId : process.env['templateId'] || '',
    toEmail: typeof window !== 'undefined' ? window.env?.toEmail : process.env['toEmail'] || ''
  }
}; 