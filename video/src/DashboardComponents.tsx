import React from 'react';

const colors = {
    sparkle: {
        bg: "#fef8f4",
        primary: "#ff6b6b",
        secondary: "#6b4c4c",
        accent: "#4ecdc4",
        lowStock: "#ffe66d",
        white: "#ffffff",
        text: "#1d0c0c"
    },
    greenscape: {
        bg: "#f6f8f6",
        primary: "#2e7d32",
        accent: "#53d059",
        text: "#2e7d32",
        white: "#ffffff"
    },
    plumbing: {
        bg: "#f6f7f8",
        primary: "#1f3b61",
        accent: "#c5a059",
        text: "#1f3b61",
        white: "#ffffff"
    },
    voltage: {
        bg: "#0f172a",
        primary: "#ffd400",
        white: "#ffffff",
        text: "#ffffff"
    },
    hvac: {
        bg: "#0f1118",
        primary: "#00d4ff",
        white: "#ffffff",
        text: "#ffffff"
    }
};

const commonStyles = {
    container: {
        width: "100%",
        height: "100%",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: "flex",
        flexDirection: "column" as const,
        padding: "60px",
        boxSizing: "border-box" as const,
        overflow: "hidden"
    },
    card: {
        backgroundColor: "white",
        borderRadius: "40px",
        padding: "40px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
        border: "1px solid #eee"
    }
};

export const SparkleDashboard = () => (
    <div style={{ ...commonStyles.container, backgroundColor: colors.sparkle.bg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px" }}>
            <div>
                <h1 style={{ fontSize: "64px", fontWeight: 900, color: colors.sparkle.primary, margin: 0 }}>Sparkle Clean</h1>
                <p style={{ color: colors.sparkle.secondary, fontSize: "20px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", marginTop: "10px" }}>Inventory Ledger • Depot #04</p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ ...commonStyles.card, padding: "24px 40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ fontSize: "48px", fontWeight: 900, color: colors.sparkle.primary }}>1,240</span>
                    <span style={{ fontSize: "12px", fontWeight: "bold", color: colors.sparkle.secondary, textTransform: "uppercase" }}>Total Units</span>
                </div>
                <div style={{ ...commonStyles.card, backgroundColor: colors.sparkle.lowStock, padding: "24px 40px", display: "flex", flexDirection: "column", alignItems: "center", border: "none" }}>
                    <span style={{ fontSize: "48px", fontWeight: 900, color: colors.sparkle.text }}>12</span>
                    <span style={{ fontSize: "12px", fontWeight: "bold", color: colors.sparkle.text, textTransform: "uppercase" }}>Low Stock</span>
                </div>
            </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div style={commonStyles.card}>
                <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px" }}>
                    <div style={{ width: "80px", height: "80px", backgroundColor: "#4ecdc420", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: colors.sparkle.accent }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>sanitizer</span>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "28px", fontWeight: 900, margin: 0 }}>Multi-Surface Cleaner</h3>
                        <p style={{ color: colors.sparkle.secondary, fontWeight: "bold", margin: "5px 0 0 0" }}>Standard Grade • Van #03</p>
                    </div>
                </div>
                <div style={{ width: "100%", height: "24px", backgroundColor: "#f0f0f0", borderRadius: "12px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "75%", backgroundColor: colors.sparkle.accent }}></div>
                </div>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "18px" }}>
                    <span style={{ color: colors.sparkle.secondary }}>24 Bottles Remaining</span>
                    <span style={{ color: colors.sparkle.accent }}>IN STOCK</span>
                </div>
            </div>
            <div style={{ ...commonStyles.card, borderLeft: `12px solid ${colors.sparkle.lowStock}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px" }}>
                    <div style={{ width: "80px", height: "80px", backgroundColor: "#ffe66d20", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: colors.sparkle.text }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>dry_cleaning</span>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "28px", fontWeight: 900, margin: 0 }}>Microfiber Cloths</h3>
                        <p style={{ color: colors.sparkle.secondary, fontWeight: "bold", margin: "5px 0 0 0" }}>Premium Silk • Depot</p>
                    </div>
                </div>
                <div style={{ width: "100%", height: "24px", backgroundColor: "#f0f0f0", borderRadius: "12px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "15%", backgroundColor: colors.sparkle.primary }}></div>
                </div>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "18px" }}>
                    <span style={{ color: colors.sparkle.secondary }}>5 Packs Remaining</span>
                    <span style={{ color: colors.sparkle.primary }}>REORDER NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export const GreenscapeDashboard = () => (
    <div style={{ ...commonStyles.container, backgroundColor: colors.greenscape.bg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px" }}>
            <div>
                <h1 style={{ fontSize: "64px", fontWeight: 900, color: colors.greenscape.primary, margin: 0 }}>GreenScape</h1>
                <p style={{ color: colors.greenscape.accent, fontSize: "20px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", marginTop: "10px" }}>Maintenance Protocol • Austin, TX</p>
            </div>
            <div style={{ backgroundColor: "#53d05920", color: colors.greenscape.primary, padding: "20px 40px", borderRadius: "100px", border: "2px solid #53d05940", fontSize: "24px", fontWeight: 900 }}>
                2h 15m ELAPSED
            </div>
        </div>
        <div style={{ ...commonStyles.card, padding: "50px", marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
                <div>
                    <h3 style={{ fontSize: "24px", fontWeight: 900, color: colors.greenscape.primary, textTransform: "uppercase", margin: 0 }}>Job Progression</h3>
                    <p style={{ color: "#666", fontSize: "20px", fontWeight: "bold", margin: "10px 0 0 0" }}>Martinez Residence • 124 Oakwood Drive</p>
                </div>
                <span style={{ fontSize: "80px", fontWeight: 900, color: colors.greenscape.primary, lineHeight: 1 }}>50%</span>
            </div>
            <div style={{ width: "100%", height: "40px", backgroundColor: "#f0f0f0", borderRadius: "20px", padding: "8px", boxSizing: "border-box" }}>
                <div style={{ height: "100%", width: "50%", background: "linear-gradient(90deg, #53d059, #2e7d32)", borderRadius: "20px" }}></div>
            </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div style={{ padding: "40px", backgroundColor: "#ffffff80", borderRadius: "40px", border: "1px solid #fff", backdropFilter: "blur(20px)" }}>
                <h4 style={{ fontSize: "20px", fontWeight: 900, color: colors.greenscape.primary, textTransform: "uppercase", marginBottom: "24px" }}>Completed Tasks</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {["Mow front and back", "Edge walkways", "Trim hedges"].map((t) => (
                        <div key={t} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#fff", padding: "20px", borderRadius: "20px", color: colors.greenscape.primary, fontWeight: "bold", fontSize: "18px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
                            <span className="material-symbols-outlined" style={{ color: colors.greenscape.accent }}>check_circle</span> {t}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ borderRadius: "40px", overflow: "hidden", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAITb5huTA93iUtJ6CB2PupyGDLojMAni5pThrvU2ZXNTz8Rs4dpGyFRCCH8hDWP0YVw40wQDqLOGiaX1XagFgQJnJrgrzBESeEfncMqE2YSRgm6R2dFU7SIgup0QGzJGlFICbcEA1cEa2Br5PL2i0y4-f5zuUYlHzWYWKU41WzaIyt1uWA5yPEOxQnelkBUxoZ51MqdvknjZEw2mtlAzU4secOV0KR29Rn8P1Ou9PrP64pqRS8jMYdkTP-44HJdZYdWNb19UAYUTek" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "30px", background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "white" }}>
                    <p style={{ margin: 0, fontSize: "20px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>Site View</p>
                </div>
            </div>
        </div>
    </div>
);

export const PlumbingDashboard = () => (
    <div style={{ ...commonStyles.container, backgroundColor: colors.plumbing.bg }}>
        <div style={{ display: "flex", backgroundColor: "white", borderRadius: "60px", boxShadow: "0 40px 100px rgba(0,0,0,0.1)", overflow: "hidden", height: "100%" }}>
            <div style={{ flex: 2, padding: "80px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "60px" }}>
                    <div>
                        <p style={{ color: colors.plumbing.accent, fontWeight: 900, textTransform: "uppercase", letterSpacing: "4px", fontSize: "14px", marginBottom: "8px" }}>Invoice #INV-2847</p>
                        <h1 style={{ fontSize: "80px", fontFamily: "serif", fontWeight: 900, color: colors.plumbing.primary, margin: 0, letterSpacing: "-2px" }}>Precision Plumbing</h1>
                    </div>
                    <div style={{ backgroundColor: "#10b98110", color: "#059669", padding: "16px 40px", borderRadius: "100px", border: "2px solid #10b98120", fontSize: "24px", fontWeight: 900 }}>PAID</div>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "12px", fontWeight: 900, color: colors.plumbing.primary, textTransform: "uppercase", letterSpacing: "4px", marginBottom: "32px", borderBottom: "2px solid #c5a05940", paddingBottom: "12px", display: "inline-block" }}>Service Breakdown</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "32px", fontWeight: "bold" }}><span>Sink Leak Repair</span><span>$185</span></div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "32px", fontWeight: "bold", color: "#ccc" }}><span>Drain Hydro-Jet</span><span>$120</span></div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginTop: "40px" }}>
                    <div style={{ aspectRatio: "4/3", backgroundColor: "#f0f0f0", borderRadius: "40px", overflow: "hidden" }}>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwY2NCicEgKgvyM8AvV9Ask6ZPNvcMt8GFCLorfLVE1M71K627mYk8ahF9TyZiqfNzEcxgiZK09alqUxBxXeBQjoxCvUSlszSEwSVO_x7-80086sNhNY2xo6fOjp7cKOfV_FCvLSNMw8QNsLjlEYfqJYQBkRM2ogEacgKufr8AcVvHtdeWDvJirsPeivYgfIONdN3FjVz0dZ0yUzQB6xVZ9EoKfo9d3x9lDtENn_FxwufKY-o-yXXM3loPRB3SeSK2xPUTo7PJlKH" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ aspectRatio: "4/3", backgroundColor: "#f0f0f0", borderRadius: "40px", overflow: "hidden" }}>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4hXUjYP6Q5K-aJDWy69NJTmmBlaF1hLf0-G3v3u2-8CeyVQQgpTGq3b52CuyeexH_QhBXgTezRNzBixNnWPPDQrceF3aIDX928UZWEOwWfmdjwNUeBS8rH8lhDWIhBDhWrC8h3XQFDVVr59i780d6LVnN9C3SyqbCU-mzPMaKbXgo0tO7Kov6sbyRX5Ut0y5CPDsmzOVefa_eniHSTgcRHoHYM7-CeON4VsKc555Wr1mVNf-Wkd13hl5_R0cQZnxgU-deseNoBtm3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
            <div style={{ flex: 1, backgroundColor: colors.plumbing.primary, padding: "80px", color: "white", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <span style={{ color: colors.plumbing.accent, fontWeight: 900, textTransform: "uppercase", letterSpacing: "4px", fontSize: "14px" }}>Customer Profile</span>
                    <h2 style={{ fontSize: "48px", fontFamily: "serif", fontWeight: 900, margin: "24px 0 8px 0" }}>Sarah Johnson</h2>
                    <p style={{ fontSize: "20px", fontWeight: "bold", opacity: 0.6 }}>Residential • Priority Client</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "24px", opacity: 0.6 }}><span>Subtotal</span><span>$362.50</span></div>
                    <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <span style={{ fontSize: "28px", fontFamily: "serif", fontWeight: 900 }}>TOTAL</span>
                        <span style={{ fontSize: "80px", fontFamily: "serif", fontWeight: 900, color: colors.plumbing.accent, lineHeight: 1 }}>$391.50</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const VoltageDashboard = () => (
    <div style={{ ...commonStyles.container, backgroundColor: colors.voltage.bg, position: "relative" }}>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkvVRj8lVzgGPtjzjgEkU9-qMCooa1JosjR4ei7osOB0TiTotfwbUMZjT6hctpWrRM_sYfrghR8fImf_xBdIfBmkBD7_Xbnh6yAbgfJdcRHfPExTyrWoRUNMkbHZVq3gGDsTjIACtK1lpODa3iRdU2XGBRjm4yt4H-pPRBnRRjR2cY8HECvbMi8c9IWtgdV_dXLsDmWUUJSEWfnPMrzUZMPwTlslsx6pibSz2uFF0nMlgMYB32uvwwUE9P-9EGZ7LcCIgtQHLR57Vn" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, filter: "blur(20px)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(40px)", padding: "60px 100px", borderRadius: "60px", border: `2px solid ${colors.voltage.primary}`, boxShadow: `0 0 100px rgba(255, 212, 0, 0.2)`, display: "flex", alignItems: "center", gap: "60px", marginBottom: "80px" }}>
                <div style={{ backgroundColor: colors.voltage.primary, padding: "30px", borderRadius: "30px", color: "black" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "80px", fontWeight: 900 }}>bolt</span>
                </div>
                <div>
                    <h1 style={{ color: "white", fontSize: "80px", fontWeight: 900, margin: 0, letterSpacing: "-4px", lineHeight: 0.9 }}>VOLTAGE ELECTRIC</h1>
                    <p style={{ color: colors.voltage.primary, fontSize: "24px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "8px", marginTop: "16px" }}>Dispatch Command Center</p>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", width: "100%", maxWidth: "1200px" }}>
                <div style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", padding: "40px", borderRadius: "40px", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", gap: "40px" }}>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaLRaJawQ_BKjuOpEQpIDIgAqiquBGQdCCfcuxNSqIutYX0snVeXqKLW5NDxZLzYCXeJI7Jl_IKemQv7KtKSDEWFVojMKTqcR3515GxkYCpmIlHG9hhqpUs7RX1w_-5TU6bmcNy-cVNGwBmYkRt58dLw8JeQ6a8ojuXYRd6NYjk1oilGAFNdeHz7_pntplCS5eseZBxdzMbS8OShkXRyKPD_WLwNDCQUg2bDtKKD6KthNFux5BU4b5VB1r6VEpbY3WQccACoAB4b8L" style={{ width: "120px", height: "120px", borderRadius: "30px", border: `4px solid ${colors.voltage.primary}` }} />
                    <div>
                        <h3 style={{ color: "white", fontSize: "36px", fontWeight: 900, margin: 0 }}>James D.</h3>
                        <p style={{ color: colors.voltage.primary, fontSize: "20px", fontWeight: "black", textTransform: "uppercase", marginTop: "8px" }}>En Route • 12m ETA</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgba(239, 68, 68, 0.9)", padding: "40px", borderRadius: "40px", border: "2px solid #ef4444", display: "flex", alignItems: "center", gap: "40px", boxShadow: "0 0 50px rgba(239,68,68,0.3)" }}>
                    <div style={{ width: "120px", height: "120px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined" style={{ color: "white", fontSize: "60px" }}>emergency</span>
                    </div>
                    <div>
                        <h3 style={{ color: "white", fontSize: "36px", fontWeight: 900, margin: 0, textTransform: "uppercase" }}>Emergency</h3>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "20px", fontWeight: "bold", marginTop: "8px" }}>Unit #101 • Power Outage</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const HvacDashboard = () => (
    <div style={{ ...commonStyles.container, backgroundColor: colors.hvac.bg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "80px" }}>
            <div>
                <h1 style={{ fontSize: "96px", fontWeight: 900, color: colors.hvac.primary, letterSpacing: "-4px", lineHeight: 0.9, margin: 0 }}>Elite HVAC</h1>
                <p style={{ color: "#b8c5d6", fontSize: "24px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "8px", marginTop: "20px" }}>Master Technician Terminal</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "32px 60px", borderRadius: "40px", textAlign: "right", color: "white" }}>
                <p style={{ margin: 0, fontSize: "20px", opacity: 0.5, fontWeight: "bold" }}>OCTOBER 2023</p>
                <p style={{ margin: "8px 0 0 0", fontSize: "32px", fontWeight: 900 }}>WEDNESDAY 25</p>
            </div>
        </div>
        <div style={{ marginTop: "auto", background: "linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)", backdropFilter: "blur(40px)", padding: "80px", borderRadius: "60px", border: `1px solid ${colors.hvac.primary}40`, boxShadow: "0 40px 100px rgba(0,0,0,0.5)", display: "flex", alignItems: "center", gap: "80px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", borderRight: "2px solid rgba(255,255,255,0.1)", paddingRight: "80px", flexShrink: 0 }}>
                <span style={{ fontSize: "100px", fontWeight: 900, color: colors.hvac.primary, lineHeight: 1 }}>11:00</span>
                <span style={{ fontSize: "40px", fontWeight: 900, opacity: 0.3, letterSpacing: "8px", marginTop: "12px" }}>AM</span>
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 style={{ fontSize: "64px", fontWeight: 900, color: "white", letterSpacing: "-2px", marginBottom: "16px", margin: 0 }}>Sarah Chen</h2>
                    <p style={{ fontSize: "24px", fontWeight: 900, color: colors.hvac.primary, textTransform: "uppercase", letterSpacing: "4px", margin: 0 }}>System Maintenance • Unit #115</p>
                </div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfm78jaqyav9ci_3UrgQoWA7z_UTeAII1CHX-GsjytNpounGGYZkbotC2HAEB5MCQ9T-_o4ZjGV9ERJPGC4K6-j-G8HnWPIsQcVhrg47SKJmuCFuNQLQH6D9ltakL3ru0Sp_9UdC9AcXFPTUFGstBJyyAQweExNgDmW1X7-N_9Gax0slE3FAmdukK_jT-ZxOCBrSUuuP-aNUx3GAWw97MF_JvODzT3GtPhG3VrCRBz9sr6dsp3ItHbnxQylBobH-xAo_zKpgkPJYU" style={{ width: "220px", height: "220px", borderRadius: "50px", border: `10px solid ${colors.hvac.primary}`, boxShadow: `0 0 60px ${colors.hvac.primary}40` }} />
            </div>
        </div>
    </div>
);
