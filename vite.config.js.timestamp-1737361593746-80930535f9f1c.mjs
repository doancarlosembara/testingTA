// vite.config.js
import { defineConfig } from "file:///C:/xampp/htdocs/testingTA/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/xampp/htdocs/testingTA/node_modules/laravel-vite-plugin/dist/index.mjs";
import vue from "file:///C:/xampp/htdocs/testingTA/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\xampp\\htdocs\\testingTA";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.js",
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  resolve: {
    alias: {
      ziggy: path.resolve(__vite_injected_original_dirname, "vendor/tightenco/ziggy/dist/vue.m.js")
    }
  },
  build: {
    rollupOptions: {
      input: {
        AttendanceCreate: "resources/js/Pages/Attendance/AttendanceCreate.vue",
        AttendanceDashboard: "resources/js/Pages/Attendance/AttendanceDashboard.vue",
        AttendanceDayView: "resources/js/Pages/Attendance/AttendanceDayView.vue",
        Attendances: "resources/js/Pages/Attendance/Attendances.vue",
        ConfirmPassword: "resources/js/Pages/Auth/ConfirmPassword.vue",
        ForgotPassword: "resources/js/Pages/Auth/ForgotPassword.vue",
        Login: "resources/js/Pages/Auth/Login.vue",
        Register: "resources/js/Pages/Auth/Register.vue",
        ResetPassword: "resources/js/Pages/Auth/ResetPassword.vue",
        VerifyEmail: "resources/js/Pages/Auth/VerifyEmail.vue",
        BranchCreate: "resources/js/Pages/Branch/BranchCreate.vue",
        BranchEdit: "resources/js/Pages/Branch/BranchEdit.vue",
        Branches: "resources/js/Pages/Branch/Branches.vue",
        BranchView: "resources/js/Pages/Branch/BranchView.vue",
        Calendar: "resources/js/Pages/Calendar/Calendar.vue",
        CalendarItemCreate: "resources/js/Pages/Calendar/CalendarItemCreate.vue",
        CalendarItemEdit: "resources/js/Pages/Calendar/CalendarItemEdit.vue",
        CalendarItems: "resources/js/Pages/Calendar/CalendarItems.vue",
        CalendarItemView: "resources/js/Pages/Calendar/CalendarItemView.vue",
        DepartmentCreate: "resources/js/Pages/Department/DepartmentCreate.vue",
        DepartmentEdit: "resources/js/Pages/Department/DepartmentEdit.vue",
        Departments: "resources/js/Pages/Department/Departments.vue",
        DepartmentView: "resources/js/Pages/Department/DepartmentView.vue",
        ArchievedEmployees: "resources/js/Pages/Employee/ArchievedEmployees.vue",
        EmployeeCreate: "resources/js/Pages/Employee/EmployeeCreate.vue",
        EmployeeEdit: "resources/js/Pages/Employee/EmployeeEdit.vue",
        EmployeeFind: "resources/js/Pages/Employee/EmployeeFind.vue",
        Employees: "resources/js/Pages/Employee/Employees.vue",
        EmployeeView: "resources/js/Pages/Employee/EmployeeView.vue",
        Globals: "resources/js/Pages/Globals/Globals.vue",
        GlobalsEdit: "resources/js/Pages/Globals/GlobalsEdit.vue",
        Logs: "resources/js/Pages/Log/Logs.vue",
        MetricCreate: "resources/js/Pages/Metric/MetricCreate.vue",
        MetricEdit: "resources/js/Pages/Metric/MetricEdit.vue",
        Metrics: "resources/js/Pages/Metric/Metrics.vue",
        MetricView: "resources/js/Pages/Metric/MetricView.vue",
        PayrollReview: "resources/js/Pages/Payroll/PayrollReview.vue",
        Payrolls: "resources/js/Pages/Payroll/Payrolls.vue",
        PayrollView: "resources/js/Pages/Payroll/PayrollView.vue",
        PositionCreate: "resources/js/Pages/Position/PositionCreate.vue",
        PositionEdit: "resources/js/Pages/Position/PositionEdit.vue",
        Positions: "resources/js/Pages/Position/Positions.vue",
        PositionView: "resources/js/Pages/Position/PositionView.vue",
        Edit: "resources/js/Pages/Profile/Edit.vue",
        RequestCreate: "resources/js/Pages/Request/RequestCreate.vue",
        Requests: "resources/js/Pages/Request/Requests.vue",
        RequestView: "resources/js/Pages/Request/RequestView.vue",
        ShiftCreate: "resources/js/Pages/Shift/ShiftCreate.vue",
        ShiftEdit: "resources/js/Pages/Shift/ShiftEdit.vue",
        Shifts: "resources/js/Pages/Shift/Shifts.vue",
        ShiftView: "resources/js/Pages/Shift/ShiftView.vue",
        UpdatePasswordForm: "resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue",
        UpdateProfileInformationForm: "resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue",
        Dashboard: "resources/js/Pages/Dashboard.vue"
      },
      external: [
        "/public/build/assets/logoCVMebel.jpg",
        "/public/build/assets/logoCVMebel-nobg.png"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcdGVzdGluZ1RBXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcdGVzdGluZ1RBXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi94YW1wcC9odGRvY3MvdGVzdGluZ1RBL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbGFyYXZlbCh7XG4gICAgICBpbnB1dDogJ3Jlc291cmNlcy9qcy9hcHAuanMnLFxuICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICB9KSxcbiAgICB2dWUoe1xuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7XG4gICAgICAgICAgYmFzZTogbnVsbCxcbiAgICAgICAgICBpbmNsdWRlQWJzb2x1dGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICB6aWdneTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3ZlbmRvci90aWdodGVuY28vemlnZ3kvZGlzdC92dWUubS5qcycpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgQXR0ZW5kYW5jZUNyZWF0ZTogJ3Jlc291cmNlcy9qcy9QYWdlcy9BdHRlbmRhbmNlL0F0dGVuZGFuY2VDcmVhdGUudnVlJyxcbiAgICAgICAgQXR0ZW5kYW5jZURhc2hib2FyZDogJ3Jlc291cmNlcy9qcy9QYWdlcy9BdHRlbmRhbmNlL0F0dGVuZGFuY2VEYXNoYm9hcmQudnVlJyxcbiAgICAgICAgQXR0ZW5kYW5jZURheVZpZXc6ICdyZXNvdXJjZXMvanMvUGFnZXMvQXR0ZW5kYW5jZS9BdHRlbmRhbmNlRGF5Vmlldy52dWUnLFxuICAgICAgICBBdHRlbmRhbmNlczogJ3Jlc291cmNlcy9qcy9QYWdlcy9BdHRlbmRhbmNlL0F0dGVuZGFuY2VzLnZ1ZScsXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogJ3Jlc291cmNlcy9qcy9QYWdlcy9BdXRoL0NvbmZpcm1QYXNzd29yZC52dWUnLFxuICAgICAgICBGb3Jnb3RQYXNzd29yZDogJ3Jlc291cmNlcy9qcy9QYWdlcy9BdXRoL0ZvcmdvdFBhc3N3b3JkLnZ1ZScsXG4gICAgICAgIExvZ2luOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0F1dGgvTG9naW4udnVlJyxcbiAgICAgICAgUmVnaXN0ZXI6ICdyZXNvdXJjZXMvanMvUGFnZXMvQXV0aC9SZWdpc3Rlci52dWUnLFxuICAgICAgICBSZXNldFBhc3N3b3JkOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0F1dGgvUmVzZXRQYXNzd29yZC52dWUnLFxuICAgICAgICBWZXJpZnlFbWFpbDogJ3Jlc291cmNlcy9qcy9QYWdlcy9BdXRoL1ZlcmlmeUVtYWlsLnZ1ZScsXG4gICAgICAgIEJyYW5jaENyZWF0ZTogJ3Jlc291cmNlcy9qcy9QYWdlcy9CcmFuY2gvQnJhbmNoQ3JlYXRlLnZ1ZScsXG4gICAgICAgIEJyYW5jaEVkaXQ6ICdyZXNvdXJjZXMvanMvUGFnZXMvQnJhbmNoL0JyYW5jaEVkaXQudnVlJyxcbiAgICAgICAgQnJhbmNoZXM6ICdyZXNvdXJjZXMvanMvUGFnZXMvQnJhbmNoL0JyYW5jaGVzLnZ1ZScsXG4gICAgICAgIEJyYW5jaFZpZXc6ICdyZXNvdXJjZXMvanMvUGFnZXMvQnJhbmNoL0JyYW5jaFZpZXcudnVlJyxcbiAgICAgICAgQ2FsZW5kYXI6ICdyZXNvdXJjZXMvanMvUGFnZXMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlJyxcbiAgICAgICAgQ2FsZW5kYXJJdGVtQ3JlYXRlOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0NhbGVuZGFyL0NhbGVuZGFySXRlbUNyZWF0ZS52dWUnLFxuICAgICAgICBDYWxlbmRhckl0ZW1FZGl0OiAncmVzb3VyY2VzL2pzL1BhZ2VzL0NhbGVuZGFyL0NhbGVuZGFySXRlbUVkaXQudnVlJyxcbiAgICAgICAgQ2FsZW5kYXJJdGVtczogJ3Jlc291cmNlcy9qcy9QYWdlcy9DYWxlbmRhci9DYWxlbmRhckl0ZW1zLnZ1ZScsXG4gICAgICAgIENhbGVuZGFySXRlbVZpZXc6ICdyZXNvdXJjZXMvanMvUGFnZXMvQ2FsZW5kYXIvQ2FsZW5kYXJJdGVtVmlldy52dWUnLFxuICAgICAgICBEZXBhcnRtZW50Q3JlYXRlOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0RlcGFydG1lbnQvRGVwYXJ0bWVudENyZWF0ZS52dWUnLFxuICAgICAgICBEZXBhcnRtZW50RWRpdDogJ3Jlc291cmNlcy9qcy9QYWdlcy9EZXBhcnRtZW50L0RlcGFydG1lbnRFZGl0LnZ1ZScsXG4gICAgICAgIERlcGFydG1lbnRzOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0RlcGFydG1lbnQvRGVwYXJ0bWVudHMudnVlJyxcbiAgICAgICAgRGVwYXJ0bWVudFZpZXc6ICdyZXNvdXJjZXMvanMvUGFnZXMvRGVwYXJ0bWVudC9EZXBhcnRtZW50Vmlldy52dWUnLFxuICAgICAgICBBcmNoaWV2ZWRFbXBsb3llZXM6ICdyZXNvdXJjZXMvanMvUGFnZXMvRW1wbG95ZWUvQXJjaGlldmVkRW1wbG95ZWVzLnZ1ZScsXG4gICAgICAgIEVtcGxveWVlQ3JlYXRlOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0VtcGxveWVlL0VtcGxveWVlQ3JlYXRlLnZ1ZScsXG4gICAgICAgIEVtcGxveWVlRWRpdDogJ3Jlc291cmNlcy9qcy9QYWdlcy9FbXBsb3llZS9FbXBsb3llZUVkaXQudnVlJyxcbiAgICAgICAgRW1wbG95ZWVGaW5kOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0VtcGxveWVlL0VtcGxveWVlRmluZC52dWUnLFxuICAgICAgICBFbXBsb3llZXM6ICdyZXNvdXJjZXMvanMvUGFnZXMvRW1wbG95ZWUvRW1wbG95ZWVzLnZ1ZScsXG4gICAgICAgIEVtcGxveWVlVmlldzogJ3Jlc291cmNlcy9qcy9QYWdlcy9FbXBsb3llZS9FbXBsb3llZVZpZXcudnVlJyxcbiAgICAgICAgR2xvYmFsczogJ3Jlc291cmNlcy9qcy9QYWdlcy9HbG9iYWxzL0dsb2JhbHMudnVlJyxcbiAgICAgICAgR2xvYmFsc0VkaXQ6ICdyZXNvdXJjZXMvanMvUGFnZXMvR2xvYmFscy9HbG9iYWxzRWRpdC52dWUnLFxuICAgICAgICBMb2dzOiAncmVzb3VyY2VzL2pzL1BhZ2VzL0xvZy9Mb2dzLnZ1ZScsXG4gICAgICAgIE1ldHJpY0NyZWF0ZTogJ3Jlc291cmNlcy9qcy9QYWdlcy9NZXRyaWMvTWV0cmljQ3JlYXRlLnZ1ZScsXG4gICAgICAgIE1ldHJpY0VkaXQ6ICdyZXNvdXJjZXMvanMvUGFnZXMvTWV0cmljL01ldHJpY0VkaXQudnVlJyxcbiAgICAgICAgTWV0cmljczogJ3Jlc291cmNlcy9qcy9QYWdlcy9NZXRyaWMvTWV0cmljcy52dWUnLFxuICAgICAgICBNZXRyaWNWaWV3OiAncmVzb3VyY2VzL2pzL1BhZ2VzL01ldHJpYy9NZXRyaWNWaWV3LnZ1ZScsXG4gICAgICAgIFBheXJvbGxSZXZpZXc6ICdyZXNvdXJjZXMvanMvUGFnZXMvUGF5cm9sbC9QYXlyb2xsUmV2aWV3LnZ1ZScsXG4gICAgICAgIFBheXJvbGxzOiAncmVzb3VyY2VzL2pzL1BhZ2VzL1BheXJvbGwvUGF5cm9sbHMudnVlJyxcbiAgICAgICAgUGF5cm9sbFZpZXc6ICdyZXNvdXJjZXMvanMvUGFnZXMvUGF5cm9sbC9QYXlyb2xsVmlldy52dWUnLFxuICAgICAgICBQb3NpdGlvbkNyZWF0ZTogJ3Jlc291cmNlcy9qcy9QYWdlcy9Qb3NpdGlvbi9Qb3NpdGlvbkNyZWF0ZS52dWUnLFxuICAgICAgICBQb3NpdGlvbkVkaXQ6ICdyZXNvdXJjZXMvanMvUGFnZXMvUG9zaXRpb24vUG9zaXRpb25FZGl0LnZ1ZScsXG4gICAgICAgIFBvc2l0aW9uczogJ3Jlc291cmNlcy9qcy9QYWdlcy9Qb3NpdGlvbi9Qb3NpdGlvbnMudnVlJyxcbiAgICAgICAgUG9zaXRpb25WaWV3OiAncmVzb3VyY2VzL2pzL1BhZ2VzL1Bvc2l0aW9uL1Bvc2l0aW9uVmlldy52dWUnLFxuICAgICAgICBFZGl0OiAncmVzb3VyY2VzL2pzL1BhZ2VzL1Byb2ZpbGUvRWRpdC52dWUnLFxuICAgICAgICBSZXF1ZXN0Q3JlYXRlOiAncmVzb3VyY2VzL2pzL1BhZ2VzL1JlcXVlc3QvUmVxdWVzdENyZWF0ZS52dWUnLFxuICAgICAgICBSZXF1ZXN0czogJ3Jlc291cmNlcy9qcy9QYWdlcy9SZXF1ZXN0L1JlcXVlc3RzLnZ1ZScsXG4gICAgICAgIFJlcXVlc3RWaWV3OiAncmVzb3VyY2VzL2pzL1BhZ2VzL1JlcXVlc3QvUmVxdWVzdFZpZXcudnVlJyxcbiAgICAgICAgU2hpZnRDcmVhdGU6ICdyZXNvdXJjZXMvanMvUGFnZXMvU2hpZnQvU2hpZnRDcmVhdGUudnVlJyxcbiAgICAgICAgU2hpZnRFZGl0OiAncmVzb3VyY2VzL2pzL1BhZ2VzL1NoaWZ0L1NoaWZ0RWRpdC52dWUnLFxuICAgICAgICBTaGlmdHM6ICdyZXNvdXJjZXMvanMvUGFnZXMvU2hpZnQvU2hpZnRzLnZ1ZScsXG4gICAgICAgIFNoaWZ0VmlldzogJ3Jlc291cmNlcy9qcy9QYWdlcy9TaGlmdC9TaGlmdFZpZXcudnVlJyxcbiAgICAgICAgVXBkYXRlUGFzc3dvcmRGb3JtOiAncmVzb3VyY2VzL2pzL1BhZ2VzL1Byb2ZpbGUvUGFydGlhbHMvVXBkYXRlUGFzc3dvcmRGb3JtLnZ1ZScsXG4gICAgICAgIFVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbkZvcm06ICdyZXNvdXJjZXMvanMvUGFnZXMvUHJvZmlsZS9QYXJ0aWFscy9VcGRhdGVQcm9maWxlSW5mb3JtYXRpb25Gb3JtLnZ1ZScsXG4gICAgICAgIERhc2hib2FyZDogJ3Jlc291cmNlcy9qcy9QYWdlcy9EYXNoYm9hcmQudnVlJyxcbiAgICAgIH0sXG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAnL3B1YmxpYy9idWlsZC9hc3NldHMvbG9nb0NWTWViZWwuanBnJyxcbiAgICAgICAgJy9wdWJsaWMvYnVpbGQvYXNzZXRzL2xvZ29DVk1lYmVsLW5vYmcucG5nJ1xuICAgICAgXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFRLFNBQVMsb0JBQW9CO0FBQ2xTLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxRQUNSLG9CQUFvQjtBQUFBLFVBQ2xCLE1BQU07QUFBQSxVQUNOLGlCQUFpQjtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU8sS0FBSyxRQUFRLGtDQUFXLHNDQUFzQztBQUFBLElBQ3ZFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsa0JBQWtCO0FBQUEsUUFDbEIscUJBQXFCO0FBQUEsUUFDckIsbUJBQW1CO0FBQUEsUUFDbkIsYUFBYTtBQUFBLFFBQ2IsaUJBQWlCO0FBQUEsUUFDakIsZ0JBQWdCO0FBQUEsUUFDaEIsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsZUFBZTtBQUFBLFFBQ2YsYUFBYTtBQUFBLFFBQ2IsY0FBYztBQUFBLFFBQ2QsWUFBWTtBQUFBLFFBQ1osVUFBVTtBQUFBLFFBQ1YsWUFBWTtBQUFBLFFBQ1osVUFBVTtBQUFBLFFBQ1Ysb0JBQW9CO0FBQUEsUUFDcEIsa0JBQWtCO0FBQUEsUUFDbEIsZUFBZTtBQUFBLFFBQ2Ysa0JBQWtCO0FBQUEsUUFDbEIsa0JBQWtCO0FBQUEsUUFDbEIsZ0JBQWdCO0FBQUEsUUFDaEIsYUFBYTtBQUFBLFFBQ2IsZ0JBQWdCO0FBQUEsUUFDaEIsb0JBQW9CO0FBQUEsUUFDcEIsZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLFFBQ2QsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLFFBQ1gsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2QsWUFBWTtBQUFBLFFBQ1osU0FBUztBQUFBLFFBQ1QsWUFBWTtBQUFBLFFBQ1osZUFBZTtBQUFBLFFBQ2YsVUFBVTtBQUFBLFFBQ1YsYUFBYTtBQUFBLFFBQ2IsZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLFFBQ1gsY0FBYztBQUFBLFFBQ2QsTUFBTTtBQUFBLFFBQ04sZUFBZTtBQUFBLFFBQ2YsVUFBVTtBQUFBLFFBQ1YsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsV0FBVztBQUFBLFFBQ1gsb0JBQW9CO0FBQUEsUUFDcEIsOEJBQThCO0FBQUEsUUFDOUIsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
