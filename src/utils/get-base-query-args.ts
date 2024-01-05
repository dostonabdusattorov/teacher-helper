export const getBaseQueryArgs = <T>(url: string, method: string, body: T) => ({
  url,
  method,
  body,
});
