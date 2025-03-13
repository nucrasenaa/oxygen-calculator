import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-gray-600">
            ติดต่อผู้พัฒนา: <a href="mailto:crase_sakarin@hotmail.com" className="text-blue-600 hover:underline">crase_sakarin@hotmail.com</a>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            แอปพลิเคชันนี้ให้บริการฟรี สามารถใช้งานได้โดยไม่มีค่าใช้จ่าย
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} 
          </p>
        </div>
      </div>
    </footer>
  );
}