import moment from 'moment';

export default class BoardService {

   getList(){
        const res = {
            data : [
                {
                    writer: '김태형',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '민윤기',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '전정국',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '박지민',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '김남준',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '정호석',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '김석진',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '방시혁',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '이현',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                },
                {
                    writer: '김뫄뫄',
                    title: 'Map of the soul',
                    created_dt: moment().format('YYYY-MM-DD'),
                    volume: 1

                }
            ]
        }



        return res;
    }
}