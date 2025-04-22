import Swal from 'sweetalert2';

const getStoredBookings = () => {
    const storedBookSTR = localStorage.getItem('bookingList');

    if (storedBookSTR) {
        const storedBook = JSON.parse(storedBookSTR);
        return storedBook;
    } else {
        return [];
    }
};

const addToStoredBookings = (id) => {
    console.log(id);
    const storedBookData = getStoredBookings();

    if (storedBookData.includes(id)) {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'warning',
            title: 'Already Booked',
            text: 'You have already booked an appointment with this doctor.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        return true;
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('bookingList', data);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Appointment Booked',
            text: 'Your appointment has been successfully booked!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        return false;
    }
};

const removeFromStoredBookings = (id) => {
    const storedBookData = getStoredBookings();
    const updatedStoredBookData = storedBookData.filter((book) => book !== id);
    const data = JSON.stringify(updatedStoredBookData);
    localStorage.setItem('bookingList', data);
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Appointment Cancelled',
        text: 'Your appointment has been successfully cancelled!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });
};

export { addToStoredBookings, getStoredBookings, removeFromStoredBookings };