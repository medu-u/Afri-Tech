import React from 'react'

function Privacy() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
          <p className="text-gray-600 mt-2">
            This is a simple demo privacy policy. We store minimal data (email,
            password, registration details) locally in the browser to
            demonstrate flows. For production, replace localStorage usage with a
            secure server and follow data protection laws.
          </p>
        </div>
      </main>
    );
}

export default Privacy
