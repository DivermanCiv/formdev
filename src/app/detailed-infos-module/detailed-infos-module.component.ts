import { Component, OnInit } from '@angular/core';
import { Student } from '../../types/Student';
import { StatusEnum } from '../../types/Status.enum';

@Component({
  selector: 'app-detailed-infos-module',
  templateUrl: './detailed-infos-module.component.html',
  styleUrls: ['./detailed-infos-module.component.scss']
})
export class DetailedInfosModuleComponent implements OnInit {

  students: Student[] = [];
  selectedStudents: Student[] = [];
  selectedPendingStudents: Student[] = [];
  absenceIndex = 0;
  showSelectedStudents = false;
  refreshing = false;
  statuses =  [
    { label: this.getReadableStatus(StatusEnum.PENDING), value: StatusEnum.PENDING },
    { label: this.getReadableStatus(StatusEnum.SIGNED), value: StatusEnum.SIGNED },
    { label: this.getReadableStatus(StatusEnum.ABSENT), value: StatusEnum.ABSENT },
  ];
  showDialog = false;

  constructor() { }

  ngOnInit(): void {
    this.students = [
      {
        id: 1,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.ABSENT
      },
      {
        id: 2,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT
      },
      {
        id: 3,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.ABSENT
      },
      {
        id: 4,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING
      },
      {
        id: 5,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING
      },
      {
        id: 6,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.SIGNED
      },
      {
        id: 7,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING
      },
      {
        id: 8,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING
      },
      {
        id: 9,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING
      },
      {
        id: 10,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.SIGNED
      },
      {
        id: 11,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.SIGNED
      },
      {
        id: 12,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING
      },
      {
        id: 13,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING
      },
      {
        id: 14,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT
      },
      {
        id: 15,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING
      },
      {
        id: 16,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING
      },{
      id: 17,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING
      },
      {
        id: 18,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT
      },
      {
        id: 19,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING
      },
      {
        id: 20,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING
      },
    ]
  }


  public getReadableStatus(status: StatusEnum): string {
    switch (status) {
      case StatusEnum.PENDING:
        return 'En attente';
      case StatusEnum.ABSENT:
        return 'Absent';
      case StatusEnum.SIGNED:
        return 'Présent';
    }
  }

  public handleAbsences() {
    this.absenceIndex = 0;

    if (this.selectedPendingStudents.length > 0) {
      this.showDialog = true;
    }
  }

  public handleRefresh() {
    this.refreshing = true;
    console.log('Refresh de la liste en cours');
    setTimeout(() => {
      this.refreshing = false;
    }, 3000);
  }

  public handleNextAbsence(cancelled = false) {
    // update the state for the current student dialog
    if (!cancelled) {
      this.selectedPendingStudents[this.absenceIndex].status = StatusEnum.ABSENT;
      this.students.concat(this.selectedPendingStudents);
    }

    // close the dialog if it was the last student selected
    if (!this.selectedPendingStudents[this.absenceIndex + 1]) {
      this.showDialog = false;
      this.selectedStudents = [];
      this.selectedPendingStudents = [];
      return;
    }
    this.absenceIndex += 1;
  }

  public handleRowSelect(student: Student) {
    if (student.status === StatusEnum.PENDING) {
      this.selectedPendingStudents.push(student);
      console.log(this.selectedPendingStudents);
    }
  }

  public handleRowUnSelect(student: Student) {
    const findIndex = this.selectedPendingStudents.findIndex(p => p.id === student.id);
    if (findIndex !== undefined) {
      this.selectedPendingStudents.splice(findIndex, 1);
    }
  }
}
