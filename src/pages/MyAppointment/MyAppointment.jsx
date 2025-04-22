import React,{useState} from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer } from 'recharts';
import { getStoredBookings,removeFromStoredBookings } from '../../utility/addToDB';
// Custom shape for bars
const getPath = (x, y, width, height) => (
`M${x},${y + height}
C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
Z`
);

const TriangleBar = (props) => {
const { fill, x, y, width, height } = props;
return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const renderCustomAxisTick = ({ x, y, payload }) => {
return (
    <text x={x} y={y + 10} textAnchor="middle" fill="#666">
    {payload.value}
    </text>
);
};

// Color palette for bars
const COLORS = [
'#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', 
'#a4de6c', '#d0ed57', '#ffc658', '#ff8042',
'#ff6e76', '#ffa23a', '#a27ae1', '#66c2a5'
];

const MyAppointment = () => {
const data = useLoaderData();
const storedBookings = getStoredBookings();
// console.log(typeof storedBookings);
// console.log(storedBookings);

const [bookedAppointments, setBookedAppointments] = useState(
    data.filter(doctor => storedBookings.includes(doctor.id))
);

// const bookedAppointments = data.filter(doctor => storedBookings.includes(doctor.id));
//console.log(bookedAppointments);

const handleCancelAppointment = (id) => {
    removeFromStoredBookings(id);
    setBookedAppointments(prevAppointments =>
        prevAppointments.filter(doctor => doctor.id !== id)
    );
}

return (
    <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mt-12'>My Appointments</h1>
        <div className=' bg-white rounded-3xl p-10 mt-10'>
        <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={bookedAppointments}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <XAxis dataKey="name" tick={renderCustomAxisTick} />
                    <YAxis />
                    <Bar
                        dataKey="consultancyFee"
                        shape={<TriangleBar />}
                        label={{ position: 'top' }}
                    >
                        {
                            bookedAppointments.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className='p-5'>
            <h1 className='text-3xl font-bold text-center mt-12 mb-12'>My Appointments</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
                {
                    bookedAppointments.map(doctor => (
                        <div key={doctor.id} className='bg-white rounded-lg p-6 shadow-md'>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col justify-between'>
                                    <h2 className='text-md font-bold'>{doctor.name}</h2>
                                    <h2 className='text-xs text-gray-500'>{doctor.education}</h2>
                                </div>
                                <p className='text-gray-500 text-xs'>Appointment Free :{doctor.consultancyFee} Taka + vat</p>
                            </div>
                            <hr className='border border-dashed text-gray-300 mt-3 mb-5'/>
                            <button onClick={() => handleCancelAppointment(doctor.id)} className='text-red-700 rounded-4xl border border-red-700 w-full px-10 py-2'>Cancel Appointment</button>
                        </div>
                    ))
                }
            </div>
        </div>
    

    </div>

);
};

export default MyAppointment;