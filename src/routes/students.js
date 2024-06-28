const express = require('express');
const router = express.Router();

// 仮の学生データ
const students = [
    { id: 1, name: 'A', customers: [{ name: 'C', subject: '種目1' }, { name: 'D', subject: '種目2' }] },
    { id: 2, name: 'B', customers: [{ name: 'E', subject: '種目3' }, { name: 'F', subject: '種目4' }] },
    // 他の学生データ
];

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.get('/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.sendFile(__dirname + '/public/student.html');
    } else {
        res.status(404).send('学生が見つかりません');
    }
});

module.exports = router;