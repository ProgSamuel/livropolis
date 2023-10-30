import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';


export   function formatDate(date: Date) {
    return format(date, 'dd MMMM yyyy', { locale: enUS });
  }