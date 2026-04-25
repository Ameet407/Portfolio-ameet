export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const formatDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();
  
  // Total months calculation (inclusive)
  let months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  
  months = months <= 0 ? 1 : months;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  let durationStr = "";
  if (years > 0) durationStr += `${years} yr${years > 1 ? 's' : ''} `;
  if (remainingMonths > 0) durationStr += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;

  const startFormatted = start.toLocaleString('default', { month: 'short', year: 'numeric' });
  const endFormatted = endDate ? new Date(endDate).toLocaleString('default', { month: 'short', year: 'numeric' }) : "Present";
  
  return `${startFormatted} - ${endFormatted} · ${durationStr.trim()}`;
};

