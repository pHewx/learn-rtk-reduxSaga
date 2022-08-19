import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authSlice from "../features/auth/authSlice";
import dashboardSlice from "../features/dashboard/dashboardSlice";
import rootSaga from "./rootSaga";
import studentSlice from "../features/student/studentSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authSlice,
    dashboard: dashboardSlice,
    student: studentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
