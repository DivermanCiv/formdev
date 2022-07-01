import { Component, OnInit } from '@angular/core';
import { Student } from '../../../types/Student';
import { StatusEnum } from '../../../types/Status.enum';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export default class EmailComponent implements OnInit {

  students: Student[] = [];
  selectedStudents: Student[] = [];
  statuses =  [
    { label: this.getReadableStatus(StatusEnum.PENDING), value: StatusEnum.PENDING },
    { label: this.getReadableStatus(StatusEnum.SIGNED), value: StatusEnum.SIGNED },
    { label: this.getReadableStatus(StatusEnum.ABSENT), value: StatusEnum.ABSENT },
  ];
  showDialog = false;
  refreshing = false;
  displaySignedOnlyStudents = false;

  constructor(
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

  public handleRefresh() {
    this.refreshing = true;
    this.messageService.add({severity:'info', summary: 'Actualisation en cours', detail: `actualisation de la liste des étudiants`});
    setTimeout(() => {
      this.refreshing = false;
    }, 3000);
  }


  sendMails() {
    this.messageService.add({severity:'info', summary: 'Envoie des emails', detail: `Envoie des mails en cours (api manquante)`});
  }
}
