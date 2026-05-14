window.ymId = 96951425;

export default function sendGoal(name: string, isWin?: boolean): void {
    if (!window.ym) {
        console.log('Not ym in window');

        return;
    }

    const source = localStorage.getItem('2026utmSource');

    console.log('Check send ym', {
        name,
        utm_source: source,
        onlyForWinbox: !!isWin,
    });

    if (isWin && source !== 'winbox' && source !== 'advcake') {
        return;
    }

    name.split(',').forEach((key) => {
        window.ym!(window.ymId, 'reachGoal', key.replace(/\s/gi, ''));
    });

    console.log('Send ym', {
        name,
        utm_source: source,
        onlyForWinbox: !!isWin,
    });
}
