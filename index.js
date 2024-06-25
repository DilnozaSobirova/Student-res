const AddStudent = document.getElementById('add-student')
const Modal = document.getElementById('modal')
const CloseBtn = document.getElementById('close-btn')
const Tbody = document.getElementById('tbody')
const Name = document.getElementById('name')
const Mark = document.getElementById('mark')
const LAstNaem = document.getElementById('lastname')
const Newstudent = document.getElementById('new-student')

AddStudent.addEventListener('click', () => {
    Modal.classList.toggle("hidden")

})

CloseBtn.addEventListener('click', () => {
    Modal.classList.toggle("hidden")
})


Newstudent.addEventListener('click', (event) => {
    event.preventDefault();
    // const mark = `${Mark.value} - ${new Date().toLocaleString()}`;
    // const percentage = (parseFloat(Mark.value) / 150) * 100;
    // const status = percentage >= 65 ? 'Pass' : 'Fail';
    // const statusColor = status === 'Pass' ? '#438059' : '#FF0000'; // Green for Pass, Red for Fail

    const mark = parseFloat(Mark.value);
    const percentage = (mark / 150) * 100;
    const status = percentage >= 65 ? 'Pass' : 'Fail';
    const statusColor = status === 'Pass' ? '#438059' : '#FF0000'; // Green for Pass, Red for Fail
    Tbody.innerHTML += `
        <th scope="row" class="px-10 py-4 font-medium text-gray-900 whitespace-nowrap">
            ${mark}
        </th>
        <td class="px-10 py-4 font-semibold  text-black	   ">${Name.value} ${LAstNaem.value}</td>
        <td class="px-10 py-4 font-semibold  text-black	 ">  ${new Date().toLocaleString()}</td>
        <td class="px-10 py-4 font-semibold  text-black	 ">${percentage.toFixed(2)}%</td>
        <td class="px-10 py-4">
            <button class="pt-[7px] pb-[8px] pl-[15px] pr-[15px] text-[#fff] rounded-[9px]" style="background-color: ${statusColor}">
                ${status}
            </button>
        </td>
        <td class="px-10 py-4">
            <div class=" w-[39px] h-[39px] rounded-[5px] border border-green-200 text-green-500  bg-gray-100">
                <i class="fa-solid fa-pen flex justify-center  pt-[10px]"></i>
            </div>
        </td>
        <td class="px-10 py-4">
            <div class="bg-gray-100 border  text-red-500 border-red-400 w-[39px] h-[39px] rounded-[5px]">
                <i class="fa-solid fa-trash flex justify-center pt-[10px]"></i>
            </div>
        </td>
        `;

    // Reset the input fields
    Name.value = '';
    LAstNaem.value = '';
    Mark.value = '';
    Modal.classList.toggle("hidden")
});
