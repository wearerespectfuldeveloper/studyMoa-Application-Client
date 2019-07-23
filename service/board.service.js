import moment from 'moment';

export default class BoardService {

   getList(){
        const res = {
            data : [
                {
                    id: 1,
                    writer: '김태형',
                    title: 'Map of the soul',
                    content:'모든게 궁금해 How was your day',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 2,
                    writer: '민윤기',
                    title: 'Map of the soul',
                    content:'oh tell me oh yeah oh yeah',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 3,
                    writer: '전정국',
                    title: 'Map of the soul',
                    content: '오맘마마 오맘마마',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 4,
                    writer: '박지민',
                    title: 'Map of the soul',
                    content: 'every picture come be my teacher',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 5,
                    writer: '김남준',
                    title: 'Map of the soul',
                    content: '너를 알게된 후로 야~',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 6,
                    writer: '정호석',
                    title: 'Miss right',
                    content: '청반바지에 컨버스 하이 찰랑이는 긴머리 끝',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 7,
                    writer: '김석진',
                    title: 'Miss right',
                    content:'한 편의 숲 같은 너 도시속에서 반짝여 때론 나의 어머니 때론 나의 에너지',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 8,
                    writer: '방시혁',
                    title: 'Miss right',
                    content: '많은 정상형들과는 달라서 너라는 사람을 이상형이라 하나봐 널 생각하면' +
                        '가슴이 시려와 내 겨욻바다 널 걷고싶다',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 9,
                    writer: '이현',
                    title: 'Miss right',
                    content: `yes you're my only girl 너는 내게 최고 너의 하루를 알고 싶어 너의 한숨이 되고 싶어`,
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                },
                {
                    id: 10,
                    writer: '말랑공룡',
                    title: 'Miss right',
                    content:'날씨마저 딱 좋은데 어쩜 사람이 그래',
                    created_dt: moment().format('YYYY-MM-DD hh:mm'),
                    volume: 1

                }
            ]
        }



        return res;
    }

    get(id){
       let list = this.getList().data;

       let i = 0;

       while(1){

           if(list[i].id == id){
               return list[i];
           }

           i++;
       }

    }
}