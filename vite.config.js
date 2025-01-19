import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      ziggy: path.resolve(__dirname, 'vendor/tightenco/ziggy/dist/vue.m.js'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        AttendanceCreate: 'resources/js/Pages/Attendance/AttendanceCreate.vue',
        AttendanceDashboard: 'resources/js/Pages/Attendance/AttendanceDashboard.vue',
        AttendanceDayView: 'resources/js/Pages/Attendance/AttendanceDayView.vue',
        Attendances: 'resources/js/Pages/Attendance/Attendances.vue',
        ConfirmPassword: 'resources/js/Pages/Auth/ConfirmPassword.vue',
        ForgotPassword: 'resources/js/Pages/Auth/ForgotPassword.vue',
        Login: 'resources/js/Pages/Auth/Login.vue',
        Register: 'resources/js/Pages/Auth/Register.vue',
        ResetPassword: 'resources/js/Pages/Auth/ResetPassword.vue',
        VerifyEmail: 'resources/js/Pages/Auth/VerifyEmail.vue',
        BranchCreate: 'resources/js/Pages/Branch/BranchCreate.vue',
        BranchEdit: 'resources/js/Pages/Branch/BranchEdit.vue',
        Branches: 'resources/js/Pages/Branch/Branches.vue',
        BranchView: 'resources/js/Pages/Branch/BranchView.vue',
        Calendar: 'resources/js/Pages/Calendar/Calendar.vue',
        CalendarItemCreate: 'resources/js/Pages/Calendar/CalendarItemCreate.vue',
        CalendarItemEdit: 'resources/js/Pages/Calendar/CalendarItemEdit.vue',
        CalendarItems: 'resources/js/Pages/Calendar/CalendarItems.vue',
        CalendarItemView: 'resources/js/Pages/Calendar/CalendarItemView.vue',
        DepartmentCreate: 'resources/js/Pages/Department/DepartmentCreate.vue',
        DepartmentEdit: 'resources/js/Pages/Department/DepartmentEdit.vue',
        Departments: 'resources/js/Pages/Department/Departments.vue',
        DepartmentView: 'resources/js/Pages/Department/DepartmentView.vue',
        ArchievedEmployees: 'resources/js/Pages/Employee/ArchievedEmployees.vue',
        EmployeeCreate: 'resources/js/Pages/Employee/EmployeeCreate.vue',
        EmployeeEdit: 'resources/js/Pages/Employee/EmployeeEdit.vue',
        EmployeeFind: 'resources/js/Pages/Employee/EmployeeFind.vue',
        Employees: 'resources/js/Pages/Employee/Employees.vue',
        EmployeeView: 'resources/js/Pages/Employee/EmployeeView.vue',
        Globals: 'resources/js/Pages/Globals/Globals.vue',
        GlobalsEdit: 'resources/js/Pages/Globals/GlobalsEdit.vue',
        Logs: 'resources/js/Pages/Log/Logs.vue',
        MetricCreate: 'resources/js/Pages/Metric/MetricCreate.vue',
        MetricEdit: 'resources/js/Pages/Metric/MetricEdit.vue',
        Metrics: 'resources/js/Pages/Metric/Metrics.vue',
        MetricView: 'resources/js/Pages/Metric/MetricView.vue',
        PayrollReview: 'resources/js/Pages/Payroll/PayrollReview.vue',
        Payrolls: 'resources/js/Pages/Payroll/Payrolls.vue',
        PayrollView: 'resources/js/Pages/Payroll/PayrollView.vue',
        PositionCreate: 'resources/js/Pages/Position/PositionCreate.vue',
        PositionEdit: 'resources/js/Pages/Position/PositionEdit.vue',
        Positions: 'resources/js/Pages/Position/Positions.vue',
        PositionView: 'resources/js/Pages/Position/PositionView.vue',
        Edit: 'resources/js/Pages/Profile/Edit.vue',
        RequestCreate: 'resources/js/Pages/Request/RequestCreate.vue',
        Requests: 'resources/js/Pages/Request/Requests.vue',
        RequestView: 'resources/js/Pages/Request/RequestView.vue',
        ShiftCreate: 'resources/js/Pages/Shift/ShiftCreate.vue',
        ShiftEdit: 'resources/js/Pages/Shift/ShiftEdit.vue',
        Shifts: 'resources/js/Pages/Shift/Shifts.vue',
        ShiftView: 'resources/js/Pages/Shift/ShiftView.vue',
        UpdatePasswordForm: 'resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue',
        UpdateProfileInformationForm: 'resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue',
        Dashboard: 'resources/js/Pages/Dashboard.vue',
      },
      external: [
        '/public/build/assets/logoCVMebel.jpg',
        '/public/build/assets/logoCVMebel-nobg.png'
      ],
    },
  },
});
