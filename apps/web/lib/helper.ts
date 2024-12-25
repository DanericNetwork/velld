export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('token');
};

export const getToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
};

export const logout = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('token');
    window.location.href = '/login';
};

export function formatSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}