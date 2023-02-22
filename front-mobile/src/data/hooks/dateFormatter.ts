import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

export default function dateFormater(date: string){
    return dayjs(date).fromNow();
}