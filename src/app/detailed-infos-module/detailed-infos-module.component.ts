import { Component, OnInit } from '@angular/core';
import { Student } from '../../types/Student';
import { StatusEnum } from '../../types/Status.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-detailed-infos-module',
  templateUrl: './detailed-infos-module.component.html',
  styleUrls: ['./detailed-infos-module.component.scss']
})
export class DetailedInfosModuleComponent implements OnInit {

  students: Student[] = [];
  selectedStudents: Student[] = [];
  editedStudent: Student | undefined;
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
  showDetailDialog = false;
  showEndDialog = false;
  id: Observable<number> | undefined;
  isModuleEnded = false;
  endSignatureSrc: string = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.students = [
      {
        id: 1,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 2,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 3,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 4,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 5,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 6,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.SIGNED,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 7,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 8,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 9,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 10,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.SIGNED,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 11,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.SIGNED,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 12,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 13,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 14,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 15,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 16,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },{
        id: 17,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 18,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 19,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 20,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
    ];
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
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

  public handleEditStudent(id: number) {
    this.showDetailDialog = true;
    const currentStudent = this.students.find(p => p.id === id);

    if (currentStudent) {
      this.editedStudent = currentStudent;
    }
  }

  handleStudentInfos() {

    this.showDetailDialog = false;

    if (this.editedStudent) {
      let findStudent = this.students.find(p => p === this.editedStudent);
      if (findStudent) {
        findStudent = this.editedStudent;
        this.messageService.add({severity:'success', summary: 'Info', detail: `Les informations de ${findStudent.firstName} ${findStudent.lastName} ont bien été modifiées`});
      }
    }
  }

  public handleRefresh() {
    this.refreshing = true;
    this.messageService.add({severity:'info', summary: 'Actualisation en cours', detail: `actualisation de la liste des étudiants`});
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

  public handleEndModuleDialog() {
    this.showEndDialog = true;
  }

  public handleEndModule(event: any) {
    this.endSignatureSrc = event.signature;
    this.isModuleEnded = true;

    this.showEndDialog = false;
    this.messageService.add({severity: 'success', summary: 'Module fermé', detail: `le module à bien été validé`});
  }
}
