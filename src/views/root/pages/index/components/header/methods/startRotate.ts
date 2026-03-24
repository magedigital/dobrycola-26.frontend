import I from '../types.ts';

const startRotate: I['startRotate'] = async function () {
    const circleNode = this.parent.current!.querySelector<HTMLElement>('.indexHeader__circleBack');

    if (!circleNode) {
        return;
    }

    const animate = () => {
        this.rotateDeg += 0.5 * this.rotateSpeed;
        this.animationId = requestAnimationFrame(animate);
        circleNode.style.transform = `rotate(${this.rotateDeg}deg)`;
    };

    this.animationId = requestAnimationFrame(animate);

    this.unmountHandlers.circle = () => {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    };
};

export default startRotate;
