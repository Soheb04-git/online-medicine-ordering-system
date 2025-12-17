"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Upload, Trash2, Download } from "lucide-react"

const prescriptions = [
  {
    id: 1,
    fileName: "prescription_jan_2024.pdf",
    uploadDate: "2024-01-15",
    doctor: "Dr. Smith",
    status: "verified",
  },
  {
    id: 2,
    fileName: "prescription_dec_2023.pdf",
    uploadDate: "2023-12-20",
    doctor: "Dr. Johnson",
    status: "verified",
  },
]

export default function PrescriptionsPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (uploadedFile) {
      alert(`Prescription "${uploadedFile.name}" uploaded successfully!`)
      setUploadedFile(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">My Prescriptions</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upload Section */}
        <div className="bg-white rounded-xl border border-border p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Upload New Prescription</h2>

          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-4">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="hidden"
              id="prescription-upload"
            />
            <label htmlFor="prescription-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="font-semibold text-foreground mb-1">
                {uploadedFile ? uploadedFile.name : "Click to upload prescription"}
              </p>
              <p className="text-sm text-muted-foreground">PDF, JPG, or PNG (Max 5MB)</p>
            </label>
          </div>

          {uploadedFile && (
            <button
              onClick={handleUpload}
              className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Upload Prescription
            </button>
          )}
        </div>

        {/* Prescriptions List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Prescriptions</h2>

          {prescriptions.length > 0 ? (
            prescriptions.map((prescription) => (
              <div
                key={prescription.id}
                className="bg-white rounded-xl border border-border p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{prescription.fileName}</h3>
                    <p className="text-sm text-muted-foreground">
                      Uploaded on {new Date(prescription.uploadDate).toLocaleDateString()} • Dr. {prescription.doctor}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {prescription.status === "verified" ? "Verified" : "Pending"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-border">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No prescriptions uploaded yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
