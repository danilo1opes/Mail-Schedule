import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashBoardsPage } from 'routes/pages/DashBoards';
import { WriteNowPage } from 'routes/pages/WriteNowPage';
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardsPage />} />
        <Route path="/dashboards" element={<DashBoardsPage />} />
        <Route path="/escrever-agora" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  );
}
