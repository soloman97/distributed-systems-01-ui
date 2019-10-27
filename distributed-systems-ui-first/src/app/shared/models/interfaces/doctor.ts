import { PatientInterface } from './patient';
import { MedicalRecordInterface } from './medicalrecord';

export class DoctorInterface {
    
    username: string;

    password: string;

    name: string;

    gender: string;

    birthdaty: string;

    address: string;

    role: string;

    patients: Array<PatientInterface>;

    medicalRecord: Array<MedicalRecordInterface>;
}