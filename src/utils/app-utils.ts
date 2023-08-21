export const generateClassNames = (classes: string[]) => {
  return Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(' ');
}

export const pluralize = ({
  count,
  label,
  suffix = 's',
  prefixValue = count,
}: {
  count: number;
  label: string;
  suffix?: string;
  prefixValue?: string | number;
}) => {
  if (count === 1) {
    return prefixValue + ' ' + label;
  } else return prefixValue + ' ' + label + suffix;
};

export const whatsAppUrlGenerator = (phoneNumber = '', isoCode = '') => {
  return `https://api.whatsapp.com/send/?phone=${isoCode}${phoneNumber}`
}

export const gmailComposeUrlGenerator = (toEmailAddress = '') => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmailAddress}`
}

const monthDiff = (dt1: Date, dt2: Date) => {
  var diffMonth = (dt2.getTime() - dt1.getTime()) / 1000;
  diffMonth /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diffMonth));
}

export const experienceCalculator = (dt1: Date, dt2: Date) => {
  const totalMonths = monthDiff(dt1, dt2)
  const totalYears = Math.floor(totalMonths / 12)
  const months = Math.floor(totalMonths % 12)
  if (totalYears && months) {
    return `${pluralize({ count: totalYears, label: 'year' })} and ${pluralize({ count: months, label: 'month' })}`
  } else if (totalYears) {
    return `${pluralize({ count: totalYears, label: 'year' })}`
  } else {
    return `${pluralize({ count: months, label: 'month' })}`
  }
}

export enum dateFormatTypes {
  DDMMMYY = 'ddmmmyy',
  DDMMM = 'ddmmm',
  YYYYMMDD = 'yyyymmdd',
  MMMYYYY = 'mmmyyyy'
}

// returns month name using index
export const getMonthName = (month: number, shortName: boolean = true) => {
  switch (month) {
    case 0:
      return shortName ? 'Jan' : 'January';
    case 1:
      return shortName ? 'Feb' : 'February';
    case 2:
      return shortName ? 'Mar' : 'March';
    case 3:
      return shortName ? 'Apr' : 'April';
    case 4:
      return shortName ? 'May' : 'May';
    case 5:
      return shortName ? 'June' : 'June';
    case 6:
      return shortName ? 'July' : 'July';
    case 7:
      return shortName ? 'Aug' : 'August';
    case 8:
      return shortName ? 'Sep' : 'September';
    case 9:
      return shortName ? 'Oct' : 'October';
    case 10:
      return shortName ? 'Nov' : 'November';
    case 11:
      return shortName ? 'Dec' : 'December';

    default:
      return '';
  }
};

export const formatDate = (
  date: Date | string,
  config: { format: dateFormatTypes; separator?: '/' | '-' | ' ' },
) => {
  if (date) {
    const dt = new Date(date);
    const monthValue = dt.getMonth();
    const monthName = getMonthName(monthValue, false);
    const dateValue = ('0' + dt.getDate()).slice(-2);
    const yearValue = dt.getFullYear();
    const separator = config?.separator || ' ';

    switch (config.format) {
      case dateFormatTypes.DDMMMYY:
      default:
        return `${dateValue} ${monthName.substring(0, 3)}’${yearValue
          .toString()
          .substring(2)}`;

      case dateFormatTypes.DDMMM:
        return `${dateValue} ${monthName.substring(0, 3)}`;

      case dateFormatTypes.YYYYMMDD:
        return (
          yearValue +
          separator +
          ('0' + (monthValue + 1)).slice(-2) +
          separator +
          dateValue
        );

      case dateFormatTypes.MMMYYYY:
        return (
          monthName.substring(0, 3) +
          separator +
          yearValue
        );
    }
  }
  return date;
};

export const convertSingleToTwoDimensionalArray = (data: any[]) => {
  let finalArray = [];

  for (let i = 0; i < data.length; i = i + 2) {
    let subArray = [];
    if (data[i + 1]) {
      subArray = [data[i], data[i + 1]];
    } else {
      subArray = [data[i]];
    }
    finalArray.push(subArray);
  }

  return finalArray;
};

