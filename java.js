import java.io.*;
import java.util.*;
class Patient {
int id;
String name;
int age;
String gender;
String date;
String time;
public Patient(int id, String name, int age, String gender, String date, String time) {
this.id = id;
this.name = name;
this.age = age;
this.gender = gender;
this.date = date;
this.time = time;
}
}
public class HospitalManagement {
static Scanner sc = new Scanner(System.in);
static final String FILE_NAME = "patients.txt";
// Add Patient
static void addPatient() {
try (FileWriter fw = new FileWriter(FILE_NAME, true);
BufferedWriter bw = new BufferedWriter(fw)) {
System.out.print("\nEnter Patient ID: ");
int id = sc.nextInt();
sc.nextLine();
System.out.print("Enter Name: ");
String name = sc.nextLine();
System.out.print("Enter Age: ");
int age = sc.nextInt();
sc.nextLine();
System.out.print("Enter Gender: ");
String gender = sc.nextLine();
System.out.print("Enter Appointment Date: ");
String date = sc.nextLine();
System.out.print("Enter Appointment Time: ");
String time = sc.nextLine();
bw.write(id + " " + name + " " + age + " " + gender + " " + date + " " + time);
bw.newLine();
System.out.println("\nPatient Registered Successfully!");
} catch (IOException e) {
System.out.println("Error writing to file!");
}
}
// View Patients
static void viewPatients() {
File file = new File(FILE_NAME);
if (!file.exists()) {
System.out.println("\nNo records found!");
return;
}
System.out.println("\n--- Patient Records ---");
try (Scanner fileScanner = new Scanner(file)) {
while (fileScanner.hasNextLine()) {
String line = fileScanner.nextLine();
String[] data = line.split(" ");
if (data.length >= 6) {
System.out.println("\nID: " + data[0]);
System.out.println("Name: " + data[1]);
System.out.println("Age: " + data[2]);
System.out.println("Gender: " + data[3]);
System.out.println("Date: " + data[4]);
System.out.println("Time: " + data[5]);
System.out.println("-------------------------");
}
}
} catch (Exception e) {
System.out.println("Error reading file!");
}
}
// Search Patient
static void searchPatient() {
File file = new File(FILE_NAME);
if (!file.exists()) {
System.out.println("\nNo records found!");
return;
}
System.out.print("\nEnter Patient ID to search: ");
int searchId = sc.nextInt();
boolean found = false;
try (Scanner fileScanner = new Scanner(file)) {
while (fileScanner.hasNextLine()) {
String line = fileScanner.nextLine();
String[] data = line.split(" ");
if (data.length >= 6 && Integer.parseInt(data[0]) == searchId) {
System.out.println("\nRecord Found:");
System.out.println("Name: " + data[1]);
System.out.println("Age: " + data[2]);
System.out.println("Gender: " + data[3]);
System.out.println("Date: " + data[4]);
System.out.println("Time: " + data[5]);
found = true;
break;
}
}
} catch (Exception e) {
System.out.println("Error reading file!");
}
if (!found) {
System.out.println("\nRecord Not Found!");
}
}
// Main Menu
public static void main(String[] args) {
while (true) {
System.out.println("\n--- Hospital Management System ---");
System.out.println("1. Register Patient");
System.out.println("2. View All Patients");
System.out.println("3. Search Patient");
System.out.println("4. Exit");
System.out.print("Enter your choice: ");
int choice;
try {
choice = sc.nextInt();
} catch (InputMismatchException e) {
System.out.println("Invalid input!");
sc.nextLine();
continue;
}
switch (choice) {
case 1:
addPatient();
break;
case 2:
viewPatients();
break;
case 3:
searchPatient();
break;
case 4:
System.exit(0);
default:
System.out.println("Invalid choice!");
}
}
}
}